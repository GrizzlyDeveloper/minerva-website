export function applyRelease052(articles) {
 for(const locale of ['ru','en']) {
  const guide=articles.find(a=>a.slug==='interface'&&a.locale===locale);
  if(!guide)throw Error('Interface guide missing');
  guide.verifiedAt='2026-11-04';
  guide.steps.push(locale==='ru'
   ?'В 0.4.52 исправлены внутренние отступы панелей профилей, заголовков и групп снимков. Поиск использует одно поле без вложенной рамки; поверхности разделов согласованы со светлой и тёмной темами.'
   :'Version 0.4.52 corrects internal spacing in profile panels, workspace headings and screenshot groups. Search uses a single field without a nested border, and workspace surfaces follow the Light and Dark themes.');
 }
}
