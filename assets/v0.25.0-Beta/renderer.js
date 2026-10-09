/* CPU compatibility renderer for the same Three.js scene. Uses perspective-projected
   geometry, depth sorting and directional metallic shading; no static mockup. */
window.createPerspectiveRenderer=function(canvas,T){
 const ctx=canvas.getContext('2d',{alpha:true});if(!ctx)throw Error('Canvas rendering unavailable');
 let width=1,height=1,dpr=1;const cache=new WeakMap();const faces=[];const vector=new T.Vector3();
 const light=new T.Vector3(-.3,.7,1).normalize();const color=new T.Color();
 function meshData(geometry){let found=cache.get(geometry);if(found)return found;const attr=geometry.attributes.position,ix=geometry.index;const local=[];for(let i=0;i<attr.count;i++)local.push(new T.Vector3().fromBufferAttribute(attr,i));const triangles=[];const count=ix?ix.count:attr.count;for(let i=0;i<count;i+=3){const a=ix?ix.getX(i):i,b=ix?ix.getX(i+1):i+1,c=ix?ix.getX(i+2):i+2;triangles.push([a,b,c]);}found={local,triangles};cache.set(geometry,found);return found;}
 function render(scene,camera){camera.updateMatrixWorld();scene.updateMatrixWorld(true);const inverse=camera.matrixWorldInverse;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,width,height);faces.length=0;
  scene.traverse(obj=>{if(!obj.visible||(!obj.isMesh&&!obj.isPoints))return;
   const mat=obj.material;if(!mat||mat.visible===false)return;
   if(obj.isPoints){const p=obj.geometry.attributes.position;for(let j=0;j<p.count;j++){vector.fromBufferAttribute(p,j).applyMatrix4(obj.matrixWorld).project(camera);if(vector.z<1){const x=(vector.x+1)*width/2,y=(1-vector.y)*height/2;ctx.fillStyle='rgba(185,213,203,.27)';ctx.fillRect(x,y,1.2,1.2);}}return;}
   const {local,triangles}=meshData(obj.geometry);const transformed=local.map(v=>v.clone().applyMatrix4(obj.matrixWorld));const projected=transformed.map(v=>v.clone().project(camera));
   const basic=mat.isMeshBasicMaterial;const opacity=mat.opacity??1;
   for(const [a,b,c] of triangles){const pa=projected[a],pb=projected[b],pc=projected[c];if(pa.z>1||pb.z>1||pc.z>1||pa.z< -1||pb.z< -1||pc.z< -1)continue;
    if((pa.x< -1.1&&pb.x< -1.1&&pc.x< -1.1)||(pa.x>1.1&&pb.x>1.1&&pc.x>1.1)||(pa.y< -1.1&&pb.y< -1.1&&pc.y< -1.1)||(pa.y>1.1&&pb.y>1.1&&pc.y>1.1))continue;
    const va=transformed[a],vb=transformed[b],vc=transformed[c],normal=new T.Vector3().subVectors(vb,va).cross(new T.Vector3().subVectors(vc,va)).normalize();const center=new T.Vector3().addVectors(va,vb).add(vc).multiplyScalar(1/3);const view=new T.Vector3().subVectors(camera.position,center).normalize();const dot=normal.dot(view);if(dot<0&&mat.side!==T.DoubleSide)continue;
    const depth=-center.clone().applyMatrix4(inverse).z;const fog=Math.exp(-Math.pow(depth*.018,2));
    let rgb;if(basic){color.copy(mat.color).convertLinearToSRGB();rgb=[color.r*255,color.g*255,color.b*255];}
    else {const facing=Math.abs(dot),diffuse=Math.max(0,normal.dot(light)),fresnel=Math.pow(1-facing,3),reflection=Math.pow(Math.max(0,Math.abs(normal.y*.87+normal.x*.32+normal.z*.25)),10);const lum=Math.min(1,.07+diffuse*.30+reflection*.58+fresnel*.62);color.copy(mat.color).convertLinearToSRGB();const cyan=Math.pow(Math.max(0,normal.x*.7+normal.z*.6),3),violet=Math.pow(Math.max(0,-normal.x*.8+normal.y*.3),3),amber=Math.pow(Math.max(0,-normal.y*.85-normal.z*.2),5);rgb=[color.r*lum*190+violet*100+amber*170+reflection*35,color.g*lum*210+cyan*95+amber*60+reflection*35,color.b*lum*235+cyan*100+violet*135+reflection*30];rgb=rgb.map(v=>Math.min(255,v+8));}
    rgb=rgb.map((v,i)=>Math.round(v*fog+[9,20,22][i]*(1-fog)));
    faces.push({depth,coords:[(pa.x+1)*width/2,(1-pa.y)*height/2,(pb.x+1)*width/2,(1-pb.y)*height/2,(pc.x+1)*width/2,(1-pc.y)*height/2],fill:`rgba(${rgb.join(',')},${opacity})`});
   }
  });faces.sort((a,b)=>b.depth-a.depth);
  for(const face of faces){const p=face.coords;ctx.beginPath();ctx.moveTo(p[0],p[1]);ctx.lineTo(p[2],p[3]);ctx.lineTo(p[4],p[5]);ctx.closePath();ctx.fillStyle=face.fill;ctx.fill();ctx.strokeStyle=face.fill;ctx.lineWidth=.5;ctx.stroke();}
 }
 return {render,setPixelRatio(v){dpr=Math.min(v,1.25)},setClearColor(){},setSize(w,h){width=w;height=h;canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr)},dispose(){cache.delete?.(null);ctx.clearRect(0,0,width,height)}};
};
