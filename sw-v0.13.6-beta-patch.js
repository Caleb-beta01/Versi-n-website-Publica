'use strict';

const STATIC_CACHE = 'inflation-insights-static-v0.13.6-beta-patch-1';
const CACHE_PREFIX = 'inflation-insights-';
const RELEASE_URL = './v0.13.6-Beta-Patch.html';
const APP_SHELL = [
  './',
  './index.html',
  RELEASE_URL,
  './manifest-v0.13.6-beta-patch.webmanifest',
  './icons/inflation-insights-192.svg',
  './icons/inflation-insights-192.png',
  './icons/inflation-insights-512.png'
];

self.addEventListener('install',function(event){
  event.waitUntil((async function(){
    const cache=await caches.open(STATIC_CACHE);
    for(const url of APP_SHELL){
      const response=await fetch(url,{cache:'reload'});
      if(!response.ok) throw new Error('No se pudo precargar '+url);
      await cache.put(url,response);
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',function(event){
  event.waitUntil((async function(){
    const names=await caches.keys();
    await Promise.all(names
      .filter(function(name){ return name.startsWith(CACHE_PREFIX) && name !== STATIC_CACHE; })
      .map(function(name){ return caches.delete(name); }));
    await self.clients.claim();
  })());
});

function isExternalDataRequest(url){
  return url.origin !== self.location.origin || /\/rest\/v1\/|\/series\/api\/|bcdata\.sgs\./i.test(url.href);
}

async function cachedRelease(){
  const cache=await caches.open(STATIC_CACHE);
  return (await cache.match(RELEASE_URL,{ignoreSearch:true})) ||
    (await cache.match('./index.html',{ignoreSearch:true}));
}

async function navigationResponse(request){
  try{
    const response=await fetch(request,{cache:'no-store'});
    if(response.ok){
      const url=new URL(request.url);
      if(url.origin === self.location.origin && /(?:index\.html|v0\.13\.6-Beta-Patch\.html)$/.test(url.pathname)){
        const cache=await caches.open(STATIC_CACHE);
        await cache.put(url.pathname.endsWith('index.html') ? './index.html' : RELEASE_URL,response.clone());
      }
    }
    return response;
  }catch(error){
    const fallback=await cachedRelease();
    if(fallback) return fallback;
    throw error;
  }
}

async function staticResponse(request){
  const cache=await caches.open(STATIC_CACHE);
  const cached=await cache.match(request,{ignoreSearch:true});
  const update=fetch(request,{cache:'no-cache'}).then(function(response){
    if(response.ok) cache.put(request,response.clone());
    return response;
  }).catch(function(){ return null; });
  return cached || (await update) || Response.error();
}

self.addEventListener('fetch',function(event){
  if(event.request.method !== 'GET') return;
  const url=new URL(event.request.url);
  if(isExternalDataRequest(url)){
    event.respondWith(fetch(event.request));
    return;
  }
  if(event.request.mode === 'navigate'){
    event.respondWith(navigationResponse(event.request));
    return;
  }
  if(url.origin === self.location.origin) event.respondWith(staticResponse(event.request));
});

self.addEventListener('message',function(event){
  if(event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
  if(event.data && event.data.type === 'GET_VERSION' && event.source){
    event.source.postMessage({type:'VERSION',version:'v0.13.6-Beta-Patch',cache:STATIC_CACHE});
  }
});
