'use strict';

const CACHE_NAME = 'inflation-insights-v0.8.2-beta-patch-1';
const APP_SHELL = [
  './',
  './index.html',
  './v0.8.2-Beta-Patch.html',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.112.1/dist/umd/supabase.js'
];

self.addEventListener('install',function(event){
  event.waitUntil((async function(){
    const cache = await caches.open(CACHE_NAME);
    await Promise.allSettled(APP_SHELL.map(async function(url){
      const response = await fetch(url,{cache:'reload'});
      if(response.ok || response.type === 'opaque') await cache.put(url,response);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',function(event){
  event.waitUntil((async function(){
    const names = await caches.keys();
    await Promise.all(names.filter(function(name){
      return name.startsWith('inflation-insights-') && name !== CACHE_NAME;
    }).map(function(name){ return caches.delete(name); }));
    await self.clients.claim();
  })());
});

function isBackendOrLiveData(url){
  return url.hostname.endsWith('.supabase.co') ||
    url.hostname === 'api.bcb.gov.br' ||
    url.hostname === 'open.er-api.com' ||
    url.hostname === 'economia.awesomeapi.com.br';
}

self.addEventListener('fetch',function(event){
  const request = event.request;
  if(request.method !== 'GET') return;
  const url = new URL(request.url);
  if(isBackendOrLiveData(url)) return;

  if(request.mode === 'navigate'){
    event.respondWith((async function(){
      const cache = await caches.open(CACHE_NAME);
      const normalized = new Request(url.origin + url.pathname,{headers:request.headers,credentials:'same-origin'});
      try{
        const response = await fetch(request);
        if(response.ok) await cache.put(normalized,response.clone());
        return response;
      }catch(error){
        return await cache.match(normalized) ||
          await cache.match('./v0.8.2-Beta-Patch.html') ||
          await cache.match('./index.html') ||
          Response.error();
      }
    })());
    return;
  }

  const cacheable = url.origin === self.location.origin ||
    request.url === 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.112.1/dist/umd/supabase.js';
  if(!cacheable) return;
  event.respondWith((async function(){
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if(cached) return cached;
    const response = await fetch(request);
    if(response.ok || response.type === 'opaque') await cache.put(request,response.clone());
    return response;
  })());
});
