import articles from './help-content.mjs';
import MiniSearch from './vendor/index.js';
import { mountRequests } from './support.js';
const categories={ru:{start:'Начало',instances:'Сборки и переход',content:'Контент и исправление',cloud:'Облако и перенос',profiles:'Профили и обслуживание'},en:{start:'Getting started',instances:'Instances and migration',content:'Content and repair',cloud:'Cloud and portable packs',profiles:'Profiles and maintenance'}};
const words={ru:{help:'Справка',account:'Личный кабинет',home:'Главная',privacy:'Конфиденциальность',terms:'Условия',search:'Поиск по справке',clear:'Очистить',all:'Все категории',found:'Найдено',empty:'Ничего не найдено. Попробуйте другие слова или выберите категорию.',contact:'Задать вопрос',audience:'Кому подходит и что требуется',steps:'Порядок действий',result:'Ожидаемый результат',errors:'Если не получилось',recovery:'Безопасное восстановление',related:'Связанные статьи',toc:'Оглавление',review:'Проверено по исходникам'},en:{help:'Help',account:'Account',home:'Home',privacy:'Privacy',terms:'Terms',search:'Search guides',clear:'Clear',all:'All categories',found:'Results',empty:'No matches. Try different words or browse a category.',contact:'Ask a question',audience:'Who this is for and prerequisites',steps:'Steps',result:'Expected result',errors:'Troubleshooting',recovery:'Safe recovery',related:'Related articles',toc:'Contents',review:'Source reviewed'}};
let language='ru',query='',category='',dispose;
try{language=localStorage.getItem('minerva-language')==='en'?'en':'ru';}catch{}
const node=(tag,text,attrs={})=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;for(const [k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;};
function highlighted(parent,text,terms){
 const lower=text.toLocaleLowerCase();let offset=0;
 while(offset<text.length){let start=-1,word='';for(const term of terms){const at=lower.indexOf(term,offset);if(at>=0&&(start<0||at<start)){start=at;word=term;}}if(start<0){parent.append(document.createTextNode(text.slice(offset)));break;}parent.append(document.createTextNode(text.slice(offset,start)),node('mark',text.slice(start,start+word.length)));offset=start+word.length;}
}
const indexes={};
for(const lang of ['ru','en']){const index=new MiniSearch({idField:'slug',fields:['title','summary','aliases','body'],storeFields:['title','summary','category'],searchOptions:{boost:{title:5,aliases:4,summary:2},prefix:true,fuzzy:0.2,combineWith:'AND'}});index.addAll(articles.filter(a=>a.locale===lang).map(a=>({...a,aliases:a.aliases.join(' '),body:[a.requirements,...a.steps,a.result,a.errors,a.recovery].join(' ')})));indexes[lang]=index;}
function render(){
 dispose?.();const t=words[language],main=document.querySelector('#main');document.documentElement.lang=language;
 document.querySelectorAll('[data-help-label]').forEach(e=>e.textContent=t[e.dataset.helpLabel]);document.querySelectorAll('[data-language]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.language===language)));
 main.replaceChildren();
 if(location.pathname==='/support/'){dispose=mountRequests(main,language);return;}
 const slug=location.pathname.split('/')[2],a=articles.find(a=>a.slug===slug&&a.locale===language);
 if(a){
  document.title=a.title+' · Minerva';const crumbs=node('p',undefined,{class:'breadcrumbs'});crumbs.append(node('a',t.help,{href:'/help/'}),document.createTextNode(' / '+categories[language][a.category]));main.append(crumbs);
  const article=node('article',undefined,{class:'help-article'});article.append(node('p',`Minerva ${a.minLauncherVersion} · ${a.verifiedAt} · ${t.review}`,{class:'eyebrow'}),node('h1',a.title),node('p',a.summary,{class:'intro'}));
  const toc=node('nav',undefined,{class:'toc','aria-label':t.toc});
  for(const key of ['audience','steps','result','errors','recovery','related'])toc.append(node('a',t[key],{href:'#'+key}));article.append(toc);
  for(const key of ['audience','steps','result','errors','recovery','related']){
   const section=node('section',undefined,{id:key});section.append(node('h2',t[key]));
   if(key==='steps'){const ol=node('ol');for(const step of a.steps)ol.append(node('li',step));section.append(ol);}
   else if(key==='related'){for(const slug of a.related){const other=articles.find(x=>x.slug===slug&&x.locale===language);section.append(node('a',other.title,{href:'/help/'+slug+'/'}),document.createTextNode(' · '));}}
   else section.append(node('p',key==='audience'?a.requirements:a[key]));
   article.append(section);
  }main.append(article);return;
 }
 document.title=t.help+' · Minerva';main.append(node('h1',t.help));
 const form=node('form',undefined,{class:'help-search',role:'search'}),label=node('label',t.search,{for:'help-search'}),input=node('input',undefined,{id:'help-search',type:'search',maxlength:'160',autocomplete:'off'});input.value=query;
 const clear=node('button',t.clear,{type:'button'}),select=node('select',undefined,{'aria-label':t.all});select.append(node('option',t.all,{value:''}));for(const [value,title]of Object.entries(categories[language]))select.append(node('option',title,{value}));select.value=category;
 form.append(label,input,clear,select);main.append(form);const status=node('p',undefined,{role:'status','aria-live':'polite'}),results=node('div',undefined,{class:'help-results'});main.append(status,results);
 function search(){query=input.value.trim();category=select.value;results.replaceChildren();const values=query?indexes[language].search(query).filter(a=>!category||a.category===category):articles.filter(a=>a.locale===language&&(!category||a.category===category));status.textContent=t.found+': '+values.length;
  for(const a of values){const slug=a.slug||a.id,source=articles.find(a=>a.slug===slug&&a.locale===language),terms=query.toLocaleLowerCase().split(/[^\p{L}\p{N}]+/u).filter(s=>s.length>1),body=[source.requirements,...source.steps,source.result,source.errors,source.recovery].join(' ');let fragment=a.summary;
   if(query&&!terms.some(term=>a.summary.toLocaleLowerCase().includes(term))){const at=Math.min(...terms.map(term=>body.toLocaleLowerCase().indexOf(term)).filter(at=>at>=0));if(Number.isFinite(at))fragment=(at>70?'…':'')+body.slice(Math.max(0,at-70),at+180)+'…';}
   const block=node('article'),h=node('h2'),link=node('a',undefined,{href:'/help/'+slug+'/'}),snippet=node('p');highlighted(link,a.title,terms);highlighted(snippet,fragment,terms);h.append(link);block.append(node('p',categories[language][a.category],{class:'eyebrow'}),h,snippet);results.append(block);}
  if(!values.length){results.append(node('p',t.empty));const contact=node('button',t.contact,{type:'button'});contact.addEventListener('click',()=>document.querySelector('#support-launcher')?.click());results.append(contact);}
 }
 form.addEventListener('submit',e=>e.preventDefault());input.addEventListener('input',search);select.addEventListener('change',search);clear.addEventListener('click',()=>{input.value='';search();input.focus();});search();
}
document.querySelectorAll('[data-language]').forEach(b=>{b.disabled=false;b.addEventListener('click',()=>{language=b.dataset.language;try{localStorage.setItem('minerva-language',language);}catch{}render();});});render();
