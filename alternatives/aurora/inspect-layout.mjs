import {createRequire}from'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require('C:/Users/Le Danila/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const b=await chromium.launch({executablePath:'C:/Users/Le Danila/AppData/Local/ms-playwright/chromium-1217/chrome-win64/chrome.exe',headless:true});
for(const width of [820,390,320]){
 const p=await b.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
 await p.goto('http://127.0.0.1:5400/alternatives/aurora/');
 console.log(width,await p.evaluate(()=>({scroll:document.documentElement.scrollWidth,offenders:[...document.querySelectorAll('body *')].map(e=>({tag:e.tagName,cls:e.className,left:e.getBoundingClientRect().left,right:e.getBoundingClientRect().right,width:e.getBoundingClientRect().width})).filter(e=>e.right>innerWidth+1||e.left< -1)})));
 await p.close();
}await b.close();
