export function applyRelease050(articles) {
 for(const locale of ['ru','en']) {
  const ru=locale==='ru', guide=articles.find(a=>a.slug==='interface'&&a.locale===locale);
  if(!guide)throw Error('Interface guide missing');
  guide.minLauncherVersion='0.4.50';guide.verifiedAt='2026-11-04';guide.verification='source';
  guide.requirements=ru?'Minerva 0.4.50 или новее для Cinematic; Studio и Classic доступны также в предыдущих версиях.':'Minerva 0.4.50 or later for Cinematic; Studio and Classic are also available in earlier versions.';
  guide.summary=ru?'Studio, Cinematic и Classic, светлая и тёмная темы, фон, интенсивность и анимации.':'Studio, Cinematic and Classic, light and dark themes, background intensity and motion.';
  guide.steps=guide.steps.map(s=>s.replace('Выберите Studio или классическое оформление.','Выберите Studio, Cinematic или классическое оформление.').replace('Choose Studio or Classic styling.','Choose Studio, Cinematic or Classic styling.').replace('В Studio выберите фон:','В Studio или Cinematic выберите фон:').replace('In Studio choose','In Studio or Cinematic choose'));
  guide.steps.push(...(ru?[
   'Для мягкого лавандового оформления выберите Cinematic. Светлая и тёмная темы доступны независимо от выбранного стиля.',
   'В Cinematic настройте «Интенсивность фона»: спокойный, сбалансированный или выразительный. Для однотонного фона настройка интенсивности не используется.',
   'Чтобы отключить движение, включите «Уменьшить анимации интерфейса» или выберите однотонный фон. Фон приостанавливается, когда окно неактивно. Выбор стиля и интенсивности сохраняется локально.'
  ]:[
   'Choose Cinematic for soft lavender styling. Light and Dark themes remain independent of the selected style.',
   'In Cinematic set Background intensity to Calm, Balanced or Vivid. Intensity is not used with the Solid background.',
   'Enable Reduce interface motion or select Solid to stop decorative movement. The background pauses when the window is inactive. Style and intensity are saved locally.'
  ]));
  guide.errors=ru?'Живой фон доступен в Studio и Cinematic. Системная настройка уменьшения движения учитывается всегда. Интенсивность меняет декоративный фон, а не прозрачность текста и кнопок.':'Animated backgrounds are available in Studio and Cinematic. The system reduced-motion preference is always respected. Intensity changes the decorative background, not text or control transparency.';
 }
}
