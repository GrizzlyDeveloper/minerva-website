const app = document.getElementById('app');
const languageButton = document.getElementById('language');
const endpoint = '/api/v1/mods';
let language = 'ru';
try {
  const savedLanguage = localStorage.getItem('minerva-language') ?? localStorage.getItem('minerva-mods-language');
  if (savedLanguage === 'en') language = 'en';
} catch {}
let query = '';
let game = '';
let loader = '';
let page = 0;
let offset = 0;
let controller;
let timer;
let lastItems = [];
let requestId = 0;
let returnPosition;
const tr = (ru, en) => language === 'ru' ? ru : en;
const projectId = () => new URLSearchParams(location.hash.slice(1)).get('project');
const idPattern = /^[a-f0-9-]{36}$/;

function el(tag, value, classes) {
  const node = document.createElement(tag);
  if (value) node.textContent = value;
  if (classes) node.className = classes;
  return node;
}

function anchor(label, href, classes) {
  const node = el('a', label, classes);
  node.href = href;
  return node;
}

function status(message, retry = false) {
  const row = el('div', '', 'panel');
  const text = el('p', message);
  text.setAttribute('role', retry ? 'alert' : 'status');
  row.append(text);
  if (retry) {
    const button = el('button', tr('Повторить', 'Retry'));
    button.addEventListener('click', () => render());
    row.append(button);
  }
  return row;
}

async function read(path, signal) {
  const response = await fetch(endpoint+path, {signal, credentials:'omit'});
  if (!response.ok) throw Object.assign(new Error('Catalog request failed'), {status:response.status});
  return response.json();
}

function releaseMetadata(values) {
  const list = el('ul', '', 'release-meta');
  for (const value of values.filter(Boolean)) list.append(el('li', value));
  return list;
}

function compatibility(item) {
  return [item.games.slice(0, 4).join(', '), item.loaders.join(', ')];
}

function projectIcon(item) {
  const icon = el('span', '', 'project-icon');
  icon.setAttribute('aria-hidden', 'true');
  const fallback = el('span', item.title.slice(0, 1).toUpperCase());
  icon.append(fallback);
  if (item.iconUrl?.startsWith('https://cdn.modrinth.com/data/')) {
    const image = el('img');
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.referrerPolicy = 'no-referrer';
    image.addEventListener('load', () => { fallback.hidden = true; }, {once:true});
    image.addEventListener('error', () => image.remove(), {once:true});
    image.src = item.iconUrl;
    icon.append(image);
  }
  return icon;
}

function card(item) {
  const row = el('article', '', 'project');
  const copy = el('div');
  const title = el('div', '', 'project-title');
  title.append(el('h2', item.title));
  if (item.modrinth) title.append(el('span', '✓ Modrinth', 'source'));
  copy.append(title, el('p', item.summary), releaseMetadata(compatibility(item)));
  const open = anchor(tr('Открыть', 'View'), '#project='+encodeURIComponent(item.id), 'action project-open');
  open.dataset.projectId = item.id;
  open.setAttribute('aria-label', tr('Открыть ', 'View ') + item.title);
  open.addEventListener('click', () => { returnPosition = {top:scrollY, id:item.id}; });
  row.append(projectIcon(item), copy, open);
  return row;
}

function select(label, value, entries, change) {
  const field = el('label', label);
  const input = el('select');
  for (const [key,title] of entries) {
    const option = el('option',title);
    option.value=key;
    input.append(option);
  }
  input.value=value;
  input.addEventListener('change', () => change(input.value));
  field.append(input);
  return field;
}

function catalog() {
  const controls=el('div','','toolbar');
  const field=el('label',tr('Поиск','Search'));
  const input=el('input');
  input.type='search';
  input.maxLength=120;
  input.value=query;
  input.placeholder=tr('Название или описание','Name or description');
  field.append(input);
  const results=el('div','','catalog-list');
  const actions=el('div','','actions pagination');
  let gameSelect;
  const knownGames=new Set(lastItems.flatMap(item=>item.games));
  if(game) knownGames.add(game);
  function rebuildGames() {
    const versionValues=[...knownGames].sort((a,b)=>b.localeCompare(a,undefined,{numeric:true}));
    const field=select(tr('Minecraft','Minecraft'),game,[['',tr('Все версии','All versions')],...versionValues.map(version=>[version,version])],
      value=>{game=value;page=0;void search();});
    if (!gameSelect) gameSelect = field;
    else {
      const current = gameSelect.querySelector('select');
      const options = [...field.querySelector('select').options];
      if (options.map(option=>option.value).join() !== [...current.options].map(option=>option.value).join()) {
        current.replaceChildren(...options);
        current.value = game;
      }
    }
  }
  rebuildGames();
  controls.append(field,gameSelect,select(tr('Загрузчик','Loader'),loader,
    [['',tr('Все загрузчики','All loaders')],...['Fabric','Quilt','Forge','NeoForge'].map(name=>[name.toLowerCase(),name])],
    value=>{loader=value;page=0;void search();}));
  const intro = el('header', '', 'catalog-intro view-entry');
  const heading = el('div');
  heading.append(el('h1',tr('Моды Minerva','Minerva Mods')),
    el('p',tr('Выберите мод и версию Minecraft.','Find a mod for your Minecraft version.'),'intro'));
  intro.append(heading, controls);
  app.append(intro, results, actions);

  async function search() {
    controller?.abort();
    controller=new AbortController();
    const current=++requestId;
    offset=page*24;
    results.setAttribute('aria-busy','true');
    if (!results.querySelector('.project')) results.replaceChildren(status(tr('Загружаем каталог…','Loading mods…')));
    actions.replaceChildren();
    try {
      const params=new URLSearchParams({q:query,game,loader,offset:String(offset),limit:'24'});
      if(!game) params.delete('game');
      if(!loader) params.delete('loader');
      const data=await read('/search?'+params,controller.signal);
      if(current!==requestId) return;
      lastItems=data.items;
      for(const item of lastItems) for(const version of item.games) knownGames.add(version);
      rebuildGames();
      results.setAttribute('aria-busy','false');
      results.replaceChildren(...(data.items.length ? data.items.map(card) :
        [status(tr('Моды не найдены.','No matching mods.'))]));
      if (returnPosition) {
        const {top, id} = returnPosition;
        returnPosition = undefined;
        results.querySelector(`[data-project-id="${CSS.escape(id)}"]`)?.focus({preventScroll:true});
        window.scrollTo(0, top);
      }
      for(const [direction,disabled,label] of [
        [-1,page===0,tr('Назад','Previous')],
        [1,offset+data.items.length>=data.total,tr('Далее','Next')],
      ]) {
        const button=el('button',label);
        button.disabled=disabled;
        button.addEventListener('click',()=>{page+=direction;void search();});
        if(page>0||data.total>24) actions.append(button);
      }
    } catch(error) {
      if(current===requestId&&error.name!=='AbortError') {
        results.setAttribute('aria-busy','false');
        results.replaceChildren(status(tr('Не удалось загрузить каталог.','Could not load the catalog.'),true));
      }
    }
  }
  input.addEventListener('input',()=>{
    query=input.value.trim();
    page=0;
    clearTimeout(timer);
    timer=setTimeout(search,300);
  });
  void search();
}

function downloadUrl(version) {
  const url=new URL(version.url,location.origin);
  if(version.source==='minerva'&&idPattern.test(version.id)&&url.origin===location.origin&&
     url.pathname==='/api/v1/mods/files/'+version.id) return url.href;
  if(version.source==='modrinth'&&url.origin==='https://cdn.modrinth.com'&&url.pathname.startsWith('/data/')) return url.href;
  return null;
}

function releaseCard(version) {
  const article=el('article','','project-version panel');
  const head=el('div','','section-head');
  const label = el('div', '', 'version-heading');
  label.append(el('h3', version.title));
  if (version.title !== version.number) label.append(el('span', version.number, 'muted'));
  head.append(label,el('span',version.source==='modrinth'?'✓ Modrinth':'Minerva','source'));
  article.append(head,releaseMetadata([
    ...compatibility(version),version.channel,new Intl.DateTimeFormat(language,{dateStyle:'medium'}).format(new Date(version.date)),
    new Intl.NumberFormat(language,{maximumFractionDigits:1}).format(version.bytes/1048576)+' MiB',
  ]));
  const copy=language==='ru' ? version.changesRu||version.changesEn||version.changes : version.changesEn||version.changesRu||version.changes;
  if(copy) {
    const notes=el('details');
    notes.append(el('summary',tr('Что нового','Changelog')),el('p',copy,'release-notes'));
    article.append(notes);
  }
  const dependencies=(version.dependencies||[]).filter(item=>item.type==='required');
  if(dependencies.length) {
    const details=el('details');
    const list=el('ul');
    for(const item of dependencies) {
      const row=el('li',item.source+' / '+(item.project||item.version));
      list.append(row);
    }
    details.append(el('summary',tr('Обязательные зависимости','Required dependencies')),list);
    article.append(details);
  }
  const href=downloadUrl(version);
  if(href) article.append(anchor(tr('Скачать JAR','Download JAR'),href,'action primary'));
  return article;
}

async function detail(id, navigated) {
  const current=++requestId;
  controller=new AbortController();
  const panel=status(tr('Загружаем версии…','Loading releases…'));
  app.append(anchor(tr('Все моды','All mods'),'#catalog','back-link'),panel);
  if(!idPattern.test(id)) {
    panel.replaceWith(status(tr('Мод не найден.','Mod not found.')));
    return;
  }
  try {
    const item=await read('/projects/'+id,controller.signal);
    if(current!==requestId) return;
    panel.remove();
    const overview = el('header', '', 'project-overview view-entry');
    const title = el('div', '', 'project-detail-title');
    const heading = el('h1', item.title);
    heading.tabIndex = -1;
    title.append(projectIcon(item), heading);
    overview.append(title, el('p',item.summary,'intro'));
    if(item.modrinth&&/^[a-zA-Z0-9]{4,32}$/.test(item.modrinth)) {
      overview.append(anchor(tr('На Modrinth','On Modrinth'),'https://modrinth.com/mod/'+item.modrinth,'action'));
    }
    if(item.description) overview.append(el('p',item.description,'release-notes project-description'));
    const versions=el('section','','version-workspace');
    const versionsTitle=el('h2',tr('Версии','Versions'));
    versionsTitle.id='versions';
    versions.setAttribute('aria-labelledby',versionsTitle.id);
    versions.append(versionsTitle);
    const list=el('div','','version-list');
    list.append(...(item.versions.length ? item.versions.map(releaseCard) :
      [status(tr('Сейчас нет доступных версий.','No releases available right now.'))]));
    versions.append(list);
    app.append(overview, versions);
    if (navigated) heading.focus({preventScroll:true});
  } catch(error) {
    if(current!==requestId||error.name==='AbortError') return;
    panel.replaceWith(error.status===404 ? status(tr('Мод не найден.','Mod not found.')) :
      status(tr('Не удалось загрузить версии.','Could not load releases.'),true));
  }
}

function render(navigated = false) {
  clearTimeout(timer);
  controller?.abort();
  requestId++;
  app.replaceChildren();
  if (navigated && projectId()) window.scrollTo(0, 0);
  document.documentElement.lang=language;
  document.title=tr('Моды · Minerva','Mods · Minerva');
  languageButton.textContent=tr('EN','RU');
  languageButton.setAttribute('aria-label',tr('Switch to English','Переключить на русский'));
  document.querySelector('[data-copy=catalog]').textContent=tr('Моды','Mods');
  document.querySelector('[data-copy=account]').textContent=tr('Личный кабинет','Account');
  for (const [key, ru, en] of [
    ['skip','К содержимому','Skip to content'],
    ['home','Главная','Home'],
    ['help','Гайды','Guides'],
    ['support','Поддержка','Support'],
    ['privacy','Конфиденциальность','Privacy'],
    ['terms','Условия','Terms'],
  ]) document.querySelector(`[data-copy=${key}]`).textContent=tr(ru,en);
  const id=projectId();
  app.dataset.view=id?'detail':'catalog';
  if(id) void detail(id, navigated);
  else catalog();
}

languageButton.addEventListener('click',()=>{
  language=tr('en','ru');
  try { localStorage.setItem('minerva-language',language); } catch {}
  render();
});
history.scrollRestoration = 'manual';
window.addEventListener('hashchange',()=>{if(location.hash!=='#app')render(true);});
render();
