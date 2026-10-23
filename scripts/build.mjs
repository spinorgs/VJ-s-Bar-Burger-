import {readdir,readFile,cp,mkdir,rm,writeFile,access} from 'node:fs/promises';
import path from 'node:path';
const pages=(await readdir('.')).filter(f=>f.endsWith('.html'));
const missing=[];
for(const page of pages){
 const html=await readFile(page,'utf8');
 for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(https?:|mailto:|tel:|#|data:)/.test(url))continue;
  try{await access(decodeURIComponent(url.split(/[?#]/)[0]));}catch{missing.push(`${page}: ${url}`);}
 }
}
const menu=JSON.parse(await readFile('menu.json','utf8'));
for(const item of menu)for(const key of ['image','thumbnail'])if(item[key]){
 try{await access(path.join('assets',item[key]));}catch{missing.push(`${item.name}: ${item[key]}`);}
}
if(missing.length)throw new Error(missing.join('\n'));
await rm('dist',{recursive:true,force:true});await mkdir('dist');
for(const file of [...pages,'style.css','appearance.css','app.js','menu.json','assets','robots.txt','sitemap.xml'])await cp(file,path.join('dist',file),{recursive:true});
console.log(`Built ${pages.length} pages; verified local destinations and images for ${menu.length} menu items.`);

// Version deployed image URLs by their bytes, including dynamically rendered menu
// images. A replacement image therefore cannot reuse an older browser/CDN entry.
const {createHash}=await import('node:crypto');
const imageVersions=new Map();
async function collectImages(directory){
 for(const entry of await readdir(directory,{withFileTypes:true})){
  const file=path.join(directory,entry.name);
  if(entry.isDirectory())await collectImages(file);
  else if(/\.(webp|png|jpe?g|svg|gif|avif)$/i.test(file)){
   const relative=path.relative('dist',file).split(path.sep).join('/');
   imageVersions.set(relative,createHash('sha256').update(await readFile(file)).digest('hex').slice(0,12));
  }
 }
}
await collectImages('dist/assets');
function versionImages(html){
 return html.replace(/assets\/[a-zA-Z0-9_./%+-]+\.(?:webp|png|jpe?g|svg|gif|avif)(?:\?[^\s"'<>(),]*)?/gi,url=>{
  const file=url.split('?')[0],version=imageVersions.get(file);
  return version?`${file}?v=${version}`:url;
 });
}
for(const page of pages){const file=path.join('dist',page);await writeFile(file,versionImages(await readFile(file,'utf8')));}
const deployedMenu=JSON.parse(await readFile('dist/menu.json','utf8'));
for(const item of deployedMenu)for(const key of ['image','thumbnail'])if(item[key]){
 const file=`assets/${item[key].split('?')[0]}`,version=imageVersions.get(file);
 if(version)item[key]=`${item[key].split('?')[0]}?v=${version}`;
}
await writeFile('dist/menu.json',JSON.stringify(deployedMenu,null,2)+'\n');
console.log(`Versioned ${imageVersions.size} image assets in HTML and menu data.`);
