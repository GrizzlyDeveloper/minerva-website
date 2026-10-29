import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,join} from 'node:path';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {chromium}=require('C:/Users/Le Danila/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const here=dirname(fileURLToPath(import.meta.url)),output=join(here,'qa');mkdirSync(output,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:'C:/Users/Le Danila/AppData/Local/ms-playwright/chromium-1217/chrome-win64/chrome.exe'});
const results=[];
try{
 for(const [name,width,height]of [['desktop',1440,1000],['tablet',820,1100],['mobile',390,844],['small',320,760]]){
  const context=await browser.newContext({viewport:{width,height}}),page=await context.newPage(),errors=[],bad=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400&&!r.url().includes('/api/'))bad.push([r.status(),r.url()]);});
  await page.goto('http://127.0.0.1:5400/alternatives/aurora/');
  await page.locator('#installer').waitFor({state:'visible'});
  await page.waitForTimeout(1300);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${name}: overflow RU`);
  assert.equal(await page.locator('.hero').evaluate(e=>getComputedStyle(e).backgroundImage.includes('.jpg')),false);
  await page.screenshot({path:join(output,`${name}-ru-hero.png`)});
  for(const selector of ['#launcher','#migration','.cloud-section','#faq','#download']){
   await page.locator(selector).scrollIntoViewIfNeeded();await page.waitForTimeout(260);
  }
  await page.waitForTimeout(900);
  await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(200);
  await page.screenshot({path:join(output,`${name}-ru-full.png`),fullPage:true});
  await page.getByRole('button',{name:'EN',exact:true}).click();
  assert.equal(await page.locator('html').getAttribute('lang'),'en');
  assert.equal(await page.locator('.hero-bottom p').innerText(),'Less setup. More play.');
  assert.equal(await page.locator('#installer').innerText(),'Download for Windows');
  assert.deepEqual(await page.locator('[data-text]').evaluateAll(els=>els.filter(e=>e.id!=='release-status'&&(!e.textContent.trim()||e.textContent==='undefined')).map(e=>e.dataset.text)),[]);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${name}: overflow EN`);
  await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(400);
  await page.screenshot({path:join(output,`${name}-en-hero.png`)});
  await page.reload();await page.locator('#installer').waitFor({state:'visible'});
  assert.equal(await page.locator('html').getAttribute('lang'),'en');
  await page.getByRole('button',{name:'RU',exact:true}).click();
  await page.getByRole('link',{name:'Что внутри',exact:true}).click();
  await page.waitForTimeout(800);
  const anchor=await page.locator('#launcher').boundingBox();
  assert(anchor.y>=0&&anchor.y<height,`${name}: anchor unreachable`);
  assert.deepEqual(errors,[],`${name}: JS errors`);assert.deepEqual(bad,[],`${name}: failed resources`);
  results.push({name,ru_en:true,no_overflow:true,no_page_errors:true,no_failed_resources:true,language_persisted:true,anchor_navigation:true});
  await context.close();
 }
 const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),page=await context.newPage();
 await page.goto('http://127.0.0.1:5400/alternatives/aurora/');
 assert.equal(await page.locator('.hero-logo').evaluate(el=>getComputedStyle(el).animationName),'none');
 assert.equal(await page.locator('.hero-copy').evaluate(el=>getComputedStyle(el).opacity),'1');
 await page.locator('#download').scrollIntoViewIfNeeded();
 assert.equal(await page.locator('#download').evaluate(el=>getComputedStyle(el).opacity),'1');
 await page.locator('#faq details').first().locator('summary').click();
 assert.equal(await page.locator('#faq details').first().getAttribute('open'),'');
 await page.locator('#support-launcher').click();
 await page.getByRole('dialog').waitFor({state:'visible'});
 await page.getByRole('button',{name:'Закрыть',exact:true}).click();
 assert.equal(await page.getByRole('dialog').isVisible(),false);
 results.push({reduced_motion:true,faq:true,support_dialog:true});await context.close();
 writeFileSync(join(output,'results.json'),JSON.stringify(results,null,2));console.log(JSON.stringify(results));
}finally{await browser.close();}
