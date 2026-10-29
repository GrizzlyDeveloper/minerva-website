// Shared, buildless support UI. All user-controlled values are rendered as text.
const messages={
ru:{ask:'Вопрос разработчику',close:'Закрыть',title:'Тема',category:'Категория',question:'Вопрос',bug:'Ошибка',suggestion:'Предложение',message:'Сообщение',version:'Версия Minerva (необязательно)',language:'Язык обращения',warning:'Не отправляйте пароли, токены, приватные ссылки и необработанные логи. Ответ появится на сайте; e-mail и Telegram не подключены.',send:'Отправить',busy:'Отправка…',sent:'Обращение создано',private:'Сохраните приватную ссылку. Без неё и без аккаунта доступ к ответу потеряется. Не оставляйте ссылку на общем компьютере.',track:'Посмотреть ответ',copy:'Копировать ссылку',copyFailed:'Не удалось скопировать. Выделите ссылку вручную.',my:'Мои обращения',inbox:'Обращения',refresh:'Обновить',new:'Новое',working:'В работе',waiting:'Нужен ответ пользователя',resolved:'Решено',archived:'Архив',spam:'Спам',all:'Все статусы',search:'Поиск по теме',empty:'Обращений нет.',back:'К списку',reply:'Ответить',resolve:'Закрыть обращение',status:'Статус',apply:'Применить',you:'Пользователь',owner:'Разработчик',previous:'Назад',next:'Далее',delete:'Удалить',confirm:'Удалить обращение и всю переписку? Это действие необратимо.',cancel:'Отмена',loading:'Загрузка…',login:'Войдите в аккаунт, чтобы увидеть обращения, или откройте сохранённую приватную ссылку.',denied:'Доступ недоступен. Проверьте аккаунт или приватную ссылку.',failed:'Не удалось выполнить запрос. Текст сохранён в этой форме. Повторите попытку.',conflict:'Переписка изменилась. Обновите её перед повторной отправкой.',limited:'Слишком много запросов или очередь заполнена. Повторите позже.',invalid:'Проверьте тему, версию и сообщение (10–10 000 символов).',expired:'Сессия истекла. Войдите заново или обновите страницу.',downloads:'Загрузки',from:'С даты (UTC)',to:'По дату (UTC)',channel:'Канал',source:'Источник',any:'Все',period:'Период',custom:'Свой диапазон',days:'дней',csv:'Экспорт CSV',metricNote:'UTC-дни. Передачи файлов, не уникальные пользователи, установки или успешные обновления. Range не дедуплицирован.',unavailable:'Источник статистики недоступен. Нулевые значения не подставлены.',checks:'Проверки обновлений',release_views:'Просмотры релиза',transfers_started:'Начатые передачи',full_transfers_completed:'Полные завершённые передачи',ranges_completed:'Завершённые Range',transfers_aborted:'Оборванные передачи',bytes:'Отданные байты',date:'Дата UTC',ascending:'Старые сначала',descending:'Новые сначала',sort:'Сортировка',noData:'В выбранном диапазоне данных нет.',partial:'Источник вернул неполные данные. Экспорт недоступен.',copied:'Скопировано',number:'Номер',activity:'Последняя активность',view:'Открыть',unread:'Непрочитано'},
en:{ask:'Ask the developer',close:'Close',title:'Subject',category:'Category',question:'Question',bug:'Bug',suggestion:'Suggestion',message:'Message',version:'Minerva version (optional)',language:'Request language',warning:'Do not send passwords, tokens, private links or unreviewed logs. Replies appear on the website; email and Telegram are not connected.',send:'Send',busy:'Sending…',sent:'Request created',private:'Save this private link. Without it or an account, you will lose access to replies. Do not leave it on a shared computer.',track:'View reply',copy:'Copy link',copyFailed:'Could not copy. Select the link manually.',my:'My requests',inbox:'Inbox',refresh:'Refresh',new:'New',working:'In progress',waiting:'Waiting for you',resolved:'Resolved',archived:'Archived',spam:'Spam',all:'All statuses',search:'Search subjects',empty:'No requests.',back:'Back to list',reply:'Reply',resolve:'Close request',status:'Status',apply:'Apply',you:'User',owner:'Developer',previous:'Previous',next:'Next',delete:'Delete',confirm:'Delete the request and its conversation? This cannot be undone.',cancel:'Cancel',loading:'Loading…',login:'Sign in to see your requests, or open your saved private tracking link.',denied:'Access unavailable. Check the account or private link.',failed:'The request failed. Your text remains in this form. Please retry.',conflict:'The conversation changed. Refresh it before retrying.',limited:'Too many requests or the queue is full. Try later.',invalid:'Check the subject, version and message (10–10,000 characters).',expired:'The session expired. Sign in again or reload.',downloads:'Downloads',from:'From date (UTC)',to:'Through date (UTC)',channel:'Channel',source:'Source',any:'All',period:'Period',custom:'Custom range',days:'days',csv:'Export CSV',metricNote:'UTC days. File transfers, not unique people, installations or successful updates. Range fragments are not deduplicated.',unavailable:'Statistics source unavailable. No zero values have been substituted.',checks:'Update checks',release_views:'Release views',transfers_started:'Transfers started',full_transfers_completed:'Full transfers completed',ranges_completed:'Range transfers completed',transfers_aborted:'Transfers aborted',bytes:'Bytes served',date:'UTC date',ascending:'Oldest first',descending:'Newest first',sort:'Sort',noData:'No data in the selected range.',partial:'The source returned incomplete data. Export is unavailable.',copied:'Copied',number:'Number',activity:'Last activity',view:'Open',unread:'Unread'}
};
messages.ru.range='Проверьте диапазон UTC: от 1 до 400 дней и корректные фильтры.';
messages.en.range='Check the UTC range: 1–400 days and valid filters are required.';
messages.ru.closed='Это обращение доступно только для чтения.';
messages.en.closed='This request is read-only.';
messages.ru.messageLimit='Достигнут лимит 50 сообщений в обращении. При необходимости создайте новое.';
messages.en.messageLimit='This request reached its 50-message limit. Create another request if needed.';
messages.ru.release='Версия';messages.en.release='Version';
const node=(tag,text,attrs={})=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;for(const [k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;};
const lang=()=>document.documentElement.lang==='en'?'en':'ru';
const token=()=>{const b=crypto.getRandomValues(new Uint8Array(32));return btoa(String.fromCharCode(...b)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');};
function button(label,fn,attrs={}){const b=node('button',label,{type:'button',...attrs});b.addEventListener('click',fn);return b;}
function field(label,control){const l=node('label',label);l.append(control);return l;}
function select(options){const e=node('select');for(const [v,t]of options)e.append(node('option',t,{value:v}));return e;}
class Client{
 async start(){const boot=await this.raw('/support/bootstrap');this.boot=boot;this.csrf=boot.authenticated?(await this.raw('/session')).csrfToken:undefined;return boot;}
 async raw(path,data,retried=false){const headers={};if(data!==undefined){headers['Content-Type']='application/json';if(this.csrf)headers['X-CSRF-Token']=this.csrf;if(this.boot?.nonce)headers['X-Support-Nonce']=this.boot.nonce;}
  const r=await fetch('/api/v1'+path,{method:data===undefined?'GET':'POST',credentials:'same-origin',cache:'no-store',headers,body:data===undefined?undefined:JSON.stringify(data),signal:AbortSignal.timeout(12000)});const v=await r.json();if(!r.ok){if(!retried&&v.error==='support_nonce_expired'){await this.start();return this.raw(path,data,true);}const e=new Error(v.error);e.status=r.status;throw e;}return v;
 }
}
function errorText(e,t){if(e?.message==='support_closed')return t.closed;if(e?.message==='support_message_limit')return t.messageLimit;if(e?.status===409)return t.conflict;if(e?.status===429||e?.message==='support_queue_full')return t.limited;if(e?.status===401)return t.expired;if(e?.status===403||e?.status===404)return t.denied;if(e?.status===400)return t.invalid;return t.failed;}
const pageContext=()=>/^\/help\/[a-z0-9-]+\/$/.test(location.pathname)?location.pathname:location.pathname.startsWith('/account')?'/account/':location.pathname==='/help/'?'/help/':'/';

export function mountCreate(root,locale=lang()){
 root.classList.add('support-kit');const t=messages[locale],client=new Client();let disposed=false,busy=false,key=crypto.randomUUID(),guestToken=token();
 const form=node('form'),subject=node('input',undefined,{required:'',maxlength:'160',autocomplete:'off'}),category=select(['question','bug','suggestion'].map(k=>[k,t[k]])),message=node('textarea',undefined,{required:'',minlength:'10',maxlength:'10000',rows:'6'}),version=node('input',undefined,{maxlength:'80',pattern:'[a-zA-Z0-9.+-]+',autocomplete:'off'}),language=select([['ru','Русский'],['en','English']]);language.value=locale;
 const submit=node('button',t.send,{type:'submit'}),status=node('p','',{role:'status'});submit.disabled=true;
 form.append(field(t.title,subject),field(t.category,category),field(t.message,message),field(t.version,version),field(t.language,language),node('p',t.warning,{class:'support-note'}),submit,status);root.append(form);
 form.addEventListener('input',()=>{if(!busy)key=crypto.randomUUID();});
 client.start().then(()=>{if(!disposed)submit.disabled=false;}).catch(e=>{status.textContent=errorText(e,t);const retry=button(t.refresh,()=>{retry.disabled=true;client.start().then(()=>{submit.disabled=false;retry.remove();status.textContent='';}).catch(e=>{status.textContent=errorText(e,t);retry.disabled=false;});});root.append(retry);});
 form.addEventListener('submit',async e=>{
  e.preventDefault();if(busy)return;busy=true;submit.disabled=true;submit.textContent=t.busy;status.textContent='';
  const controls=[subject,category,message,version,language];controls.forEach(c=>c.disabled=true);
  try{const result=await client.raw('/support/threads',{subject:subject.value,category:category.value,message:message.value,version:version.value,locale:language.value,page:pageContext(),key,...(!client.boot.authenticated?{guestToken}:{})});if(disposed)return;
   const link=location.origin+(client.boot.authenticated?'/account/support':'/support/#id='+result.id+'&token='+guestToken);root.replaceChildren(node('h3',t.sent),node('p',t.number+': '+result.id),node('p',t.status+': '+t[result.status]),node('a',t.track,{href:link}));
   if(!client.boot.authenticated){const input=node('input',undefined,{readonly:'','aria-label':t.track});input.value=link;const copied=node('p','',{role:'status'});root.append(node('p',t.private),input,button(t.copy,async()=>{try{await navigator.clipboard.writeText(link);copied.textContent=t.copied;}catch{copied.textContent=t.copyFailed;input.focus();input.select();}}),copied);}
  }catch(e){if(!disposed)status.textContent=errorText(e,t);}finally{busy=false;if(!disposed&&submit.isConnected){controls.forEach(c=>c.disabled=false);submit.disabled=false;submit.textContent=t.send;}}
 });return ()=>{disposed=true;};
}

// Fragment credentials are consumed once and held in memory, never persisted.
let guestAccess;
if(location.pathname==='/support/'){
 const p=new URLSearchParams(location.hash.slice(1)),id=p.get('id'),secret=p.get('token');
 if(/^[a-f0-9-]{36}$/.test(id||'')&&/^[A-Za-z0-9_-]{43}$/.test(secret||''))guestAccess={id,token:secret};
 if(location.hash)history.replaceState(null,'',location.pathname);
}
export function mountRequests(root,locale=lang(),owner=false){
 root.classList.add('support-kit');const t=messages[locale],client=new Client();let disposed=false,busy=false,offset=0,current=null,draft='',selectedStatus='',pending=null;
 const heading=node('h2',owner?t.inbox:t.my),toolbar=node('div',undefined,{class:'support-toolbar'}),list=node('div'),detail=node('div'),status=node('p',t.loading,{role:'status'});
 const query=node('input',undefined,{type:'search',maxlength:'160','aria-label':t.search,placeholder:t.search}),filter=select([['',t.all],...['new','working','waiting','resolved','archived','spam'].map(k=>[k,t[k]])]);filter.setAttribute('aria-label',t.status);
 const refresh=button(t.refresh,()=>void run(async()=>{if(current)await show(current.id);else await listing();}));toolbar.append(query,filter,button(t.search,()=>{offset=0;void run(listing);}),refresh);root.append(heading,toolbar,status,list,detail);
 const base=owner?'/owner/support':'/support/threads';
 async function run(fn){if(busy||disposed)return;busy=true;refresh.disabled=true;status.textContent='';try{await fn();}catch(e){if(e.status===409)pending=null;if(!disposed)status.textContent=errorText(e,t);}finally{busy=false;refresh.disabled=false;}}
 async function listing(){
  if(guestAccess)return show(guestAccess.id);
  if(!client.boot.authenticated){status.textContent=t.login;return;}
  const data=await client.raw(base+'?'+new URLSearchParams({q:query.value,status:filter.value,offset:String(offset)}));if(disposed)return;current=null;list.replaceChildren();detail.replaceChildren();
  const table=node('table'),thead=node('thead'),tr=node('tr');for(const label of [t.title,t.category,t.status,t.activity,t.language,t.version,t.view])tr.append(node('th',label));thead.append(tr);table.append(thead);const body=node('tbody');
  for(const item of data.threads){const row=node('tr');for(const value of [item.subject,t[item.category],t[item.status]+(owner&&item.unread?' • '+t.unread:''),new Date(item.updated_at).toLocaleString(locale),item.locale,item.version])row.append(node('td',value));const td=node('td');td.append(button(t.view,()=>{draft='';pending=null;void run(()=>show(item.id));}));row.append(td);body.append(row);}table.append(body);const scroll=node('div',undefined,{class:'support-table'});scroll.append(table);list.append(scroll);if(!data.total)list.append(node('p',t.empty));
  const prev=button(t.previous,()=>{offset=Math.max(0,offset-25);void run(listing);}),next=button(t.next,()=>{offset+=25;void run(listing);});prev.disabled=offset===0;next.disabled=offset+25>=data.total;list.append(prev,node('span',` ${offset+Math.min(1,data.total)}–${Math.min(offset+25,data.total)} / ${data.total} `),next);
 }
 async function read(id){return client.raw(base+'/'+id+'/read',guestAccess?{token:guestAccess.token}:{});}
 async function show(id){
  const value=await read(id);if(disposed)return;current=value;selectedStatus=value.status;list.replaceChildren();detail.replaceChildren();
  if(client.boot.authenticated)detail.append(button(t.back,()=>void run(listing)));
  detail.append(node('h3',value.subject),node('p',t.number+': '+value.id),node('p',t.status+': '+t[value.status]));
  for(const m of value.messages){const article=node('article',undefined,{class:'support-message'});article.append(node('strong',t[m.author==='owner'?'owner':'you']),node('time',new Date(m.created_at).toLocaleString(locale)),node('p',m.text));detail.append(article);}
  if(!owner&&['spam','archived'].includes(value.status)){detail.append(node('p',t.closed));return;}
  const form=node('form'),input=node('textarea',undefined,{required:'',minlength:'10',maxlength:'10000',rows:'4'});input.value=draft;input.addEventListener('input',()=>{draft=input.value;pending=null;});const send=node('button',t.reply,{type:'submit'});form.append(field(t.message,input),send);detail.append(form);
  async function change(data){
   if(!pending)pending={key:crypto.randomUUID(),revision:current.revision,...data};
   await client.raw(base+'/'+id+'/change',{...pending,...(guestAccess?{token:guestAccess.token}:{})});draft='';pending=null;await show(id);
  }
  form.addEventListener('submit',e=>{e.preventDefault();void run(async()=>{input.disabled=true;send.disabled=true;try{await change({message:input.value});}finally{input.disabled=false;send.disabled=false;}});});
  if(owner){const state=select(['new','working','waiting','resolved','archived','spam'].map(k=>[k,t[k]]));state.value=selectedStatus;detail.append(field(t.status,state),button(t.apply,()=>{pending=null;void run(()=>change({status:state.value}));}));
   const confirm=node('div');detail.append(button(t.delete,()=>{confirm.replaceChildren(node('p',t.confirm),button(t.delete,()=>void run(async()=>{await client.raw(base+'/'+id+'/delete',{key:crypto.randomUUID(),revision:current.revision,confirm:id});await listing();})),button(t.cancel,()=>confirm.replaceChildren()));}),confirm);
  }else detail.append(button(t.resolve,()=>{pending=null;void run(()=>change({status:'resolved'}));}));
 }
 client.start().then(()=>run(async()=>{if(owner&&!client.boot.owner)throw Object.assign(new Error(),{status:403});if(!client.boot.authenticated&&!guestAccess){status.textContent=t.login;root.append(node('a',t.my,{href:'/account/support'}));return;}await listing();})).catch(e=>status.textContent=errorText(e,t));
 const timer=setInterval(()=>{if(!document.hidden&&current&&!draft&&!pending)void run(()=>show(current.id));},30000);
 return ()=>{disposed=true;clearInterval(timer);};
}

const events=['full_transfers_completed','ranges_completed','transfers_started','transfers_aborted','bytes','checks','release_views'];
export function mountAdmin(root,locale=lang()){
 root.classList.add('support-kit');const t=messages[locale],client=new Client();let disposed=false,cleanup,busy=false,offset=0,last=null;
 const tabs=node('div',undefined,{class:'support-toolbar'}),content=node('div');tabs.append(button(t.downloads,()=>downloads()),button(t.inbox,()=>{cleanup?.();content.replaceChildren();cleanup=mountRequests(content,locale,true);}));root.append(tabs,content);
 function downloads(){cleanup?.();cleanup=null;content.replaceChildren();const title=node('h2',t.downloads),form=node('form',undefined,{class:'support-toolbar'}),period=select([['7','7 '+t.days],['30','30 '+t.days],['90','90 '+t.days],['custom',t.custom]]),from=node('input',undefined,{type:'date',required:''}),to=node('input',undefined,{type:'date',required:''}),version=node('input',undefined,{maxlength:'80',pattern:'[a-zA-Z0-9.+-]*'}),channel=select([['',t.any],['stable','stable'],['preview','preview'],['manual','manual']]),source=select([['',t.any],['website','website'],['updater','updater'],['manual','manual']]),sort=select([['desc',t.descending],['asc',t.ascending]]),submit=node('button',t.refresh,{type:'submit'}),status=node('p','',{role:'status'}),results=node('div'),csv=button(t.csv,()=>void exporting());csv.disabled=true;
  const updateDates=()=>{if(period.value==='custom')return;const end=new Date(),start=new Date(end);start.setUTCDate(end.getUTCDate()-Number(period.value)+1);from.value=start.toISOString().slice(0,10);to.value=end.toISOString().slice(0,10);};updateDates();period.addEventListener('change',updateDates);for(const d of [from,to])d.addEventListener('change',()=>period.value='custom');form.append(field(t.period,period),field(t.from,from),field(t.to,to),field(t.release,version),field(t.channel,channel),field(t.source,source),field(t.sort,sort),submit,csv);content.append(title,node('p',t.metricNote,{class:'support-note'}),form,status,results);
  const params=()=>new URLSearchParams({from:from.value,to:to.value,version:version.value,channel:channel.value,source:source.value,sort:sort.value,offset:String(offset)});
  const currentParams=()=>{const p=params();p.delete('offset');return p.toString();};let displayedParams='';
  async function load(){if(busy||disposed)return;busy=true;submit.disabled=true;csv.disabled=true;status.textContent=t.loading;last=null;results.replaceChildren();try{
   const data=await client.raw('/owner/statistics?'+params());if(disposed||!results.isConnected)return;if(!data.complete||data.timeZone!=='UTC'){status.textContent=t.partial;return;}last=data;displayedParams=currentParams();status.textContent=data.total?'':t.noData;csv.disabled=false;
   const totals=node('dl',undefined,{class:'support-totals'});for(const event of events)totals.append(node('dt',t[event]),node('dd',String(data.totals[event])));results.append(totals);
   // Accessible SVG line chart, with exact values available in the table below.
   const chart=node('div',undefined,{class:'support-chart'}),ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 760 220');svg.setAttribute('role','img');svg.setAttribute('aria-label',t.full_transfers_completed+' / '+t.ranges_completed+' · UTC');
   const max=Math.max(1,...data.daily.flatMap(d=>[d.full_transfers_completed,d.ranges_completed]));
   for(const [index,event]of ['full_transfers_completed','ranges_completed'].entries()){const line=document.createElementNS(ns,'polyline');line.setAttribute('points',data.daily.map((d,i)=>`${20+i*720/Math.max(1,data.daily.length-1)},${200-d[event]*180/max}`).join(' '));line.setAttribute('class',index?'ranges':'full');svg.append(line);}chart.append(svg,node('p',`${data.from} → ${data.to} · UTC · 0–${max}`),node('p',t.full_transfers_completed+' — '+(locale==='ru'?'зелёный':'green')+' · '+t.ranges_completed+' — '+(locale==='ru'?'синий':'blue')));results.append(chart);
   const table=node('table'),head=node('tr');for(const title of [t.date,t.release,t.channel,t.source,...events.map(e=>t[e])])head.append(node('th',title));const thead=node('thead');thead.append(head);table.append(thead);const tbody=node('tbody');for(const row of data.rows){const tr=node('tr');for(const key of ['day','version','channel','source',...events])tr.append(node('td',String(row[key])));tbody.append(tr);}table.append(tbody);const wrap=node('div',undefined,{class:'support-table'});wrap.append(table);results.append(wrap);const prev=button(t.previous,()=>{offset=Math.max(0,offset-50);void load();}),next=button(t.next,()=>{offset+=50;void load();});prev.disabled=offset===0;next.disabled=offset+50>=data.total;results.append(prev,node('span',` ${offset+Math.min(1,data.total)}–${Math.min(offset+50,data.total)} / ${data.total} `),next);
  }catch(e){status.textContent=e.status===400?t.range:t.unavailable;}finally{busy=false;submit.disabled=false;}}
  async function exporting(){if(busy||!last||displayedParams!==currentParams())return;busy=true;csv.disabled=true;try{const p=params();p.set('export','1');const data=await client.raw('/owner/statistics?'+p);if(!data.complete||data.rows.length!==data.total)throw new Error();const keys=['day','version','channel','source',...events];const cell=v=>'"'+String(v).replace(/^[=+@\-\t\r]/,"'"+'$&').replace(/"/g,'""')+'"';const csvText='\uFEFF'+[keys,...data.rows.map(r=>keys.map(k=>r[k]))].map(row=>row.map(cell).join(',')).join('\r\n');const url=URL.createObjectURL(new Blob([csvText],{type:'text/csv;charset=utf-8'})),a=node('a',undefined,{href:url,download:'minerva-transfers-utc.csv'});a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}catch{status.textContent=t.unavailable;}finally{busy=false;csv.disabled=false;}}
  form.addEventListener('submit',e=>{e.preventDefault();offset=0;void load();});form.addEventListener('input',()=>{csv.disabled=true;});void load();
 }
 client.start().then(()=>{if(disposed)return;if(!client.boot.owner){content.textContent=t.denied;return;}downloads();}).catch(()=>content.textContent=t.denied);
 return ()=>{disposed=true;cleanup?.();};
}

function upgradeLauncherIcon(open){
 if(open.dataset.minervaIcon==='true')return;
 open.dataset.minervaIcon='true';
 const update=()=>{
  open.setAttribute('aria-label',messages[lang()].ask);open.title=messages[lang()].ask;
  if(open.querySelector('svg[data-support-icon]'))return;
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg'),path=document.createElementNS(svg.namespaceURI,'path');
  for(const [key,value]of Object.entries({viewBox:'0 0 24 24',width:'24',height:'24',fill:'none',stroke:'currentColor','stroke-width':'2','stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true','data-support-icon':'true'}))svg.setAttribute(key,value);
  // Lucide MessageCircle, lucide-react 1.47.0 (ISC).
  path.setAttribute('d','M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719');svg.append(path);open.replaceChildren(svg);
 };
 update();new MutationObserver(update).observe(open,{childList:true});new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
}
function installWidget(){
 const existing=document.getElementById('support-launcher');if(existing){upgradeLauncherIcon(existing);return;}
 const header=document.querySelector('body > header');
 if(header){
  const measure=()=>document.documentElement.style.setProperty('--site-header-height',`${header.getBoundingClientRect().height}px`);
  measure();new ResizeObserver(measure).observe(header);
 }
 const root=node('div',undefined,{class:'support-kit support-widget'}),open=button('',show,{id:'support-launcher','aria-haspopup':'dialog','aria-label':messages[lang()].ask,title:messages[lang()].ask}),dialog=node('dialog',undefined,{class:'support-kit support-dialog','aria-labelledby':'support-dialog-title'});
 upgradeLauncherIcon(open);
 root.append(open,dialog);document.body.append(root);let cleanup,returnFocus;
 function show(){if(dialog.open)return;returnFocus=document.activeElement;dialog.replaceChildren();const locale=lang(),t=messages[locale],header=node('div',undefined,{class:'support-dialog-header'});header.append(node('h2',t.ask,{id:'support-dialog-title'}),button(t.close,()=>dialog.close(),{'aria-label':t.close}));const content=node('div');dialog.append(header,content);cleanup=mountCreate(content,locale);dialog.showModal();dialog.querySelector('input')?.focus();}
 dialog.addEventListener('close',()=>{cleanup?.();returnFocus?.focus();});
 // Native modal dialog provides Escape, focus containment and inert background.
 new MutationObserver(()=>{open.setAttribute('aria-label',messages[lang()].ask);open.title=messages[lang()].ask;}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 const check=()=>{root.hidden=!!document.fullscreenElement||!!document.querySelector('[role="dialog"][aria-modal="true"]');};setInterval(check,1000);document.addEventListener('fullscreenchange',check);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installWidget,{once:true});else installWidget();
