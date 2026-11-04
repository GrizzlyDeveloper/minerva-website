// Loopback-only development server. Backend requests use the isolated fixture.
import http from 'node:http';
import { readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname, sep } from 'node:path';
const here=dirname(fileURLToPath(import.meta.url)),site=resolve(here,'../..');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.json':'application/json; charset=utf-8','.woff2':'font/woff2'};
const server=http.createServer((req,res)=>{
  const url=new URL(req.url,'http://127.0.0.1:5400');
  if(url.pathname==='/'){res.writeHead(302,{Location:'/alternatives/aurora/'});res.end();return;}
  if(['/api/','/account/','/releases/','/downloads/'].some(prefix=>url.pathname.startsWith(prefix))){
    const proxy=http.request({host:'127.0.0.1',port:5399,path:req.url,method:req.method,headers:req.headers},up=>{res.writeHead(up.statusCode,up.headers);up.pipe(res);});
    proxy.on('error',()=>{res.writeHead(503);res.end('Local fixture unavailable');});req.pipe(proxy);return;
  }
  try{
    const relative=decodeURIComponent(url.pathname).replace(/^\/+/, '');
    let path=url.pathname==='/'?resolve(here,'index.html'):resolve(site,relative);
    if(!path.startsWith(site+sep)||relative.split('/').some(s=>s.startsWith('.')))throw Error('path');
    if(statSync(path).isDirectory())path=resolve(path,'index.html');
    if(!types[extname(path)])throw Error('extension');
    res.writeHead(200,{'Content-Type':types[extname(path)],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
    res.end(req.method==='HEAD'?undefined:readFileSync(path));
  }catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}
});
server.listen(5400,'127.0.0.1',()=>console.log('Alternative preview: http://127.0.0.1:5400/alternatives/aurora/'));
for(const signal of ['SIGTERM','SIGINT'])process.once(signal,()=>{server.closeAllConnections();server.close(()=>process.exit(0));});
