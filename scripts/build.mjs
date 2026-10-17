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
for(const file of [...pages,'style.css','appearance.css','app.js','menu.json','assets'])await cp(file,path.join('dist',file),{recursive:true});
console.log(`Built ${pages.length} pages; verified local destinations and images for ${menu.length} menu items.`);
