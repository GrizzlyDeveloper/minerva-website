const en={skip:'Skip to content',launcher:'Features',guides:'Guides',changelog:'Changelog',download:'Download',account:'Account',intro:'Minecraft Java for Windows x64. Separate instances, available content and your game profiles.',downloadWindows:'Download for Windows',getStarted:'Get started →',screenshot:'Installed Minerva 0.4.28 · captured 15 October 2026',workspace:'YOUR MINECRAFT',launcherHeading:'Everything in its place.',instancesTitle:'Instances',instancesCopy:'Separate instances, Minecraft versions and settings. ZIP import and export.',modsTitle:'Content and repair',modsCopy:'Modrinth and CurseForge, mod versions, dependencies and grouped reports. Unknown conflicts need manual investigation.',profilesTitle:'Profiles',profilesCopy:'Microsoft and local profiles. In-game switching supports Fabric 1.21.1 and 1.21.11.',warmTitle:'Warm Return',warmCopy:'Return to a game kept in memory. Opt-in for Fabric 1.21.1 and 1.21.11; Minecraft continues using RAM.',more:'Read more →',migrationLabel:'MOVE TO MINERVA',migrationTitle:'Your pack. A new home.',migrationCopy:'Copy supported game data from Modrinth or TL into a separate instance. Review contents and size first; the source stays in place. Choose custom folders manually.',migrationLimits:'Close Minecraft in the source launcher first. Accounts and launch hooks are not imported. Minecraft and Java are prepared on first launch.',cloudLabel:'SAVE AND SHARE',cloudTitle:'Keep your pack’s contents handy.',cloudCopy:'Two free cloud slots, revision updates and up to five revocable links per pack. Each link is a snapshot of its revision. Keybinds are separate, with up to ten saved sets.',cloudLimits:'A .minerva manifest pins available catalog content by version and hash. It does not include worlds, private configs or binaries. Use a local ZIP backup for those.',cloudGuide:'Cloud saves →',backupGuide:'Backups →',bindGuide:'Keybinds →',restoreLabel:'INSTALLATION YOU CAN FOLLOW',restoreTitle:'See what has been installed.',restoreCopy:'Select components and a target, follow individual files and retry failed downloads. Resume unfinished manifest installations into the same target. Skipping required files leaves installation incomplete.',restoreGuide:'Install a manifest →',resumeGuide:'When the connection fails →',faq:'A few essentials',faq1:'Do I need a Minerva account to play?',faq1a:'Game profiles and Minerva accounts are separate. Minerva enables personal cloud saves and keybinds; Microsoft sign-in and game entitlement are checked separately.',faq2:'Is a cloud pack a full backup?',faq2a:'No. It is a manifest of available content. Preserve worlds and personal files in a separate, verified ZIP.',faq3:'Can I play offline?',faq3a:'Local-file mode requires Minecraft, Java and libraries to be prepared already. It does not remove Microsoft requirements or make cloud features work offline.',allGuides:'All guides →',downloadHeading:'Download Minerva',signed:'The launcher verifies update signatures.',warning:'The installer does not yet have Windows Authenticode signing. SmartScreen may display a warning.',loading:'Checking the published release…',version:'Version',size:'Size',date:'Published',copy:'Copy',signature:'Installer signature',retry:'Retry',privacy:'Privacy',terms:'Terms',archive:'Release archive',independent:'Independent project. Not affiliated with Mojang or Microsoft.',unavailable:'No release is available here yet.',failed:'The release server is unavailable. Please retry.',sourceNotes:'Original release notes (English):',copied:' Copied',copyFailed:' Select and copy the hash manually.'};
Object.assign(en,{"profilesCopy": "Microsoft and local profiles. In-game switching on Fabric 1.21.1, 1.21.11, 26.2 and 26.3 after disconnecting from the server.", "warmCopy": "Return to a game kept in memory. A separate, off-by-default option for Fabric 1.21.1 and 1.21.11; Minecraft continues using RAM.", "migrationCopy": "Copy supported game data from Prism Launcher, MultiMC, Modrinth or TL into a separate instance. Review contents and size first; your source installation stays in place.", "migrationLimits": "Close the source game first. Accounts, tokens and launch commands are not copied. Prism/MultiMC imports recognize the Minecraft version and loader; Minecraft and Java files are prepared at launch.", "sharedLabel": "ONE LIBRARY FOR YOUR INSTANCES", "sharedTitle": "Shared folders. Independent copies.", "sharedCopy": "Connect schematics, emotes, sounds, screenshots and allowed folders to a shared library. Clone content only or the full instance with worlds and settings — the copy stays independent.", "sharedLimits": "Original local data is preserved separately. Open a shared world in only one game at a time. Full cloning and ZIP export include independent copies of shared data.", "sharedGuide": "Shared folders →", "cloneGuide": "Clone an instance →", "skinLabel": "YOUR IN-GAME LOOK", "skinTitle": "Skins, capes and Minerva badges.", "skinCopy": "Manage official Microsoft skins and capes, your local library and a separate Minerva appearance. The component supports Fabric 1.21.1, 1.21.4, 1.21.10, 1.21.11, 26.2 and 26.3.", "skinLimits": "Applying Minerva HD skins requires Premium and Minerva sign-in. All component users can view them. This is a separate override; your official Microsoft skin is not replaced.", "skinGuide": "Customize your appearance →"});
en.skins='Skins';
const ru={loading:'Проверяем опубликованный релиз…',unavailable:'Здесь пока нет опубликованного релиза.',failed:'Сервер релизов недоступен. Повторите попытку.',sourceNotes:'Исходные заметки релиза (английский):',copied:' Скопировано',copyFailed:' Выделите и скопируйте хеш вручную.'};
// Editorial notes are keyed to real releases and never reused for unknown versions.
const notes={
 "0.4.27": {
  "ru": "Исправлена повторная установка модов после ручного удаления файлов. Проверки совместимости и зависимостей сохранены.",
  "en": "Fixed reinstalling mods after manual file deletion. Compatibility and dependency checks remain enabled."
 },
 "0.4.28": {
  "ru": "Облачные сборки, ссылки на ревизии, перенос игровых данных и библиотека биндов.",
  "en": "Cloud packs, revision share links, game-data migration and a keybind library."
 },
 "0.4.29": {
  "ru": "Редактор внешности, официальные скины и плащи, отдельные скины Minerva и Premium HD-слоты.",
  "en": "Appearance editor, official skins and capes, separate Minerva skins and Premium HD slots."
 },
 "0.4.30": {
  "ru": "Перенос из Prism/MultiMC, обновлённая панель сборок, улучшения предпросмотра внешности и HD-скинов.",
  "en": "Prism/MultiMC import, refreshed instance navigation and appearance/HD-skin preview improvements."
 },
 "0.4.31": {
  "ru": "Поиск по настройкам, отдельные разделы аккаунтов и облака, компактные таблицы сохранений и защита несохранённых изменений расписания.",
  "en": "Searchable settings, separate account and cloud sections, compact saved-data tables and protection for unsaved schedule changes."
 },
 "0.4.32": {
  "ru": "Исправлен автоматический выбор Java: при отсутствии совместимой Java разрешена её управляемая установка. Ручной путь и запуск из локальных файлов по-прежнему проверяются.",
  "en": "Fixed automatic Java selection: managed installation is allowed when compatible Java is missing. Custom paths and local-file launching remain validated."
 },
 "0.4.33": {
  "ru": "Независимое клонирование сборок, переключение игровых профилей на Fabric 26.2/26.3 и компонент скинов и значков для шести версий Fabric. Warm Return остаётся отдельной опцией для 1.21.1 и 1.21.11.",
  "en": "Independent instance cloning, in-game profile switching on Fabric 26.2/26.3 and the skins/badges component for six Fabric versions. Warm Return remains a separate option for 1.21.1 and 1.21.11."
 },
 "0.4.34": {
  "ru": "Общие папки между сборками с сохранением локальных данных и независимым клонированием. Резервное скачивание обновлений с GitHub с обязательной проверкой подписи. Улучшения входа в Minerva и сообщений о скинах.",
  "en": "Shared folders with preserved local data and independent cloning. GitHub update-download fallback with mandatory signature verification. Clearer Minerva sign-in and skin status."
 }
};
const originals=new Map([...document.querySelectorAll('[data-text]')].map(e=>[e,e.textContent]));
let language='ru',status='loading',releaseValue=null;
try{language=localStorage.getItem('minerva-language')==='en'?'en':'ru';}catch{}
const text=key=>(language==='en'?en:ru)[key]||'';
function applyLanguage(){
 document.documentElement.lang=language;
 const heroRelease=document.querySelector('#hero-release');
 if(heroRelease)heroRelease.textContent=releaseValue
  ? (language==='ru'?'Версия ':'Version ')+releaseValue.version+' · '+new Date(releaseValue.publishedAt).toLocaleDateString(language==='ru'?'ru-RU':'en-GB')
  : 'Windows x64';
 document.querySelector('nav').setAttribute('aria-label',language==='ru'?'Навигация':'Navigation');
 for(const [e,original]of originals)e.textContent=language==='en'?en[e.dataset.text]:original;
 document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===language)));
 document.querySelector('#release-status').textContent=text(status);
 document.querySelector('#copy-status').textContent='';
 const history=document.querySelector('#release-history');history.replaceChildren();
 for(const [version,value]of Object.entries(notes).slice(-4).reverse()){
  const article=document.createElement('article'),h=document.createElement('h3'),p=document.createElement('p');h.textContent=version;p.textContent=value[language];article.append(h,p);history.append(article);
 }
 if(releaseValue){
  const n=document.querySelector('#release-notes');n.lang=language;n.replaceChildren();if(notes[releaseValue.version])n.textContent=notes[releaseValue.version][language];else{const original=document.createElement('span');original.lang='en';original.textContent=releaseValue.notes;n.append(document.createTextNode(text('sourceNotes')+' '),original);}n.hidden=!n.textContent;
  document.querySelector('#release-date').textContent=new Date(releaseValue.publishedAt).toLocaleDateString(language==='ru'?'ru-RU':'en-GB');
 }
}
document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>{language=b.dataset.language;try{localStorage.setItem('minerva-language',language);}catch{}applyLanguage();}));
async function load(){
 const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),10000);releaseValue=null;status='loading';applyLanguage();document.querySelector('#retry').hidden=true;
 for(const id of ['installer','signature','release-details','release-notes'])document.getElementById(id).hidden=true;
 try{
  const response=await fetch('/releases/latest.json',{cache:'no-store',signal:controller.signal});
  if(response.status===503){status='unavailable';return;}if(!response.ok)throw new Error();
  const v=await response.json();
  if(typeof v.version!=='string'||!/^[0-9A-Za-z.-]{1,80}$/.test(v.version)||!Number.isSafeInteger(v.size)||v.size<=0||!/^[a-f0-9]{64}$/.test(v.sha256)||typeof v.notes!=='string'||v.notes.length>16000||!Number.isFinite(Date.parse(v.publishedAt)))throw new Error();
  const expected='/downloads/'+v.version+'/Minerva_'+v.version+'_x64-setup.exe',url=new URL(v.downloadUrl,location.origin),sig=new URL(v.signatureUrl,location.origin);
  if(url.origin!==location.origin||url.pathname!==expected||sig.origin!==location.origin||sig.pathname!==expected+'.sig')throw new Error();
  document.querySelector('#installer').href=url.href;document.querySelector('#signature').href=sig.href;
  document.querySelector('#release-version').textContent=v.version;document.querySelector('#release-size').textContent=(v.size/1048576).toFixed(1)+' MiB';document.querySelector('#release-sha').textContent=v.sha256;
  releaseValue=v;status='';for(const id of ['installer','signature','release-details'])document.getElementById(id).hidden=false;
 }catch{status='failed';}finally{clearTimeout(timeout);applyLanguage();document.querySelector('#retry').hidden=!status;}
}
document.querySelector('#copy-sha').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(releaseValue.sha256);document.querySelector('#copy-status').textContent=text('copied');}catch{document.querySelector('#copy-status').textContent=text('copyFailed');}});
document.querySelector('#retry').addEventListener('click',load);applyLanguage();void load();

;(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const strings = {
    ru: { heroFoot: 'Меньше рутины. Больше игры.', explore: 'Что внутри', separateCopy: 'Отдельная копия', sourceSafe: 'Оригинал остаётся на месте', transferLabel: 'Схема переноса сборки' },
    en: { heroFoot: 'Less setup. More play.', explore: 'Explore Minerva', separateCopy: 'A separate copy', sourceSafe: 'Your source stays in place', transferLabel: 'Pack migration diagram' }
  };
  const localize = () => {
    const locale = document.documentElement.lang === 'en' ? 'en' : 'ru';
    document.querySelectorAll('[data-motion-text]').forEach(el => { el.textContent = strings[locale][el.dataset.motionText]; });
    document.querySelectorAll('[data-motion-label]').forEach(el => { el.setAttribute('aria-label', strings[locale][el.dataset.motionLabel]); });
  };
  localize();
  new MutationObserver(localize).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  // Elements remain readable when JavaScript or IntersectionObserver is absent.
  if ('IntersectionObserver' in window && !reduced.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    document.querySelectorAll('.section-heading, .features article, .editorial, .faq-section, .changelog-section, .download').forEach((el, i) => {
      el.classList.add('reveal'); el.style.setProperty('--delay', `${el.matches('.features article') ? i % 4 * 65 : 0}ms`); observer.observe(el);
    });
    reduced.addEventListener('change', () => { if (reduced.matches) { observer.disconnect(); document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')); } });
  }
  const scene = document.querySelector('.brand-scene');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  let frame = 0;
  scene.addEventListener('pointermove', event => {
    if (reduced.matches || !pointer.matches) return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const r = scene.getBoundingClientRect();
      scene.style.setProperty('--rx', `${-(event.clientY - r.top - r.height / 2) / 38}deg`);
      scene.style.setProperty('--ry', `${(event.clientX - r.left - r.width / 2) / 38}deg`);
    });
  });
  scene.addEventListener('pointerleave', () => { cancelAnimationFrame(frame); scene.style.setProperty('--rx', '0deg'); scene.style.setProperty('--ry', '0deg'); });
  document.querySelectorAll('.features article').forEach(card => card.addEventListener('pointermove', event => {
    if (reduced.matches || !pointer.matches) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - r.left}px`);
    card.style.setProperty('--my', `${event.clientY - r.top}px`);
  }));
  const header = document.querySelector('body > header');
  const resize = new ResizeObserver(() => document.documentElement.style.setProperty('--site-header-height', `${header.offsetHeight}px`));
  resize.observe(header);
  // One progress line; transform updates are coalesced to animation frames.
  let scrollFrame = 0;
  const scroll = () => { if (scrollFrame) return; scrollFrame = requestAnimationFrame(() => {
    const range = document.documentElement.scrollHeight - innerHeight;
    document.documentElement.style.setProperty('--progress', range > 0 ? scrollY / range : 0);
    header.classList.toggle('scrolled', scrollY > 20); scrollFrame = 0;
  }); };
  addEventListener('scroll', scroll, { passive: true }); scroll();
})();
