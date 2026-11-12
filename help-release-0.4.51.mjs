export function applyRelease051(articles) {
 for(const locale of ['ru','en']) {
  const guide=articles.find(a=>a.slug==='interface'&&a.locale===locale);
  if(!guide)throw Error('Interface guide missing');
  guide.verifiedAt='2026-11-04';
  guide.steps.push(locale==='ru'
   ?'Начиная с 0.4.51, в Cinematic кнопки, выделения и логотип клиентского режима лавандовые, а серверного — жёлтые. Ошибки и удаление сохраняют красное оформление. Цветовая гамма меняется вместе с режимом лаунчера; выбор светлой или тёмной темы сохраняется.'
   :'Starting with 0.4.51, Cinematic client buttons, selections and logo use lavender; server mode uses yellow. Errors and destructive actions remain red. Accents follow the launcher workspace while your Light or Dark theme choice is preserved.');
 }
}
