export function applyRelease047(articles) {
  for (const locale of ['ru','en']) {
    const ru=locale==='ru';
    articles.push({slug:'interface',locale,category:'start',title:ru?'Оформление и цветовая тема':'Interface style and colour theme',
      summary:ru?'Studio и классический вид, тёмная и светлая тема, фон и анимации.':'Studio and Classic styling, dark/light colours, backgrounds and motion.',
      tags:['Studio','Classic','theme','interface','тема','оформление','фон'],aliases:['theme','interface','тема','фон'],related:['install','first-steps'],minLauncherVersion:'0.4.47',verifiedAt:'2026-11-03',verification:'source',
      requirements:ru?'Minerva 0.4.47 или новее для Windows.':'Minerva 0.4.47 or later for Windows.',
      steps:ru?['Откройте «Настройки → Интерфейс».','Выберите Studio или классическое оформление.','В поле «Цветовая тема» выберите тёмную или светлую тему. Изменения применяются сразу.','В Studio выберите фон: лучи Minerva, живой или однотонный.','Включите «Уменьшить анимации интерфейса», если предпочитаете неподвижные элементы. Системная настройка уменьшения движения также учитывается.']:['Open Settings → Interface.','Choose Studio or Classic styling.','Select Dark or Light under Colour theme. Changes apply immediately.','In Studio choose Minerva light trails, Ambient or Solid background.','Enable Reduce interface motion for static controls. The system reduced-motion preference is also respected.'],
      result:ru?'Оформление сохранено локально. Сборки, игровые профили и содержимое папок не изменяются.':'Visual preferences are saved locally. Instances, game profiles and folder contents stay unchanged.',
      errors:ru?'Выбор живого фона доступен в Studio. Анимация приостанавливается при потере фокуса и отключается при уменьшении движения.':'Animated backgrounds are available in Studio. Motion pauses when focus is lost and is disabled by reduced-motion preferences.',
      recovery:ru?'Верните классическое оформление или однотонный фон через тот же раздел. При проблеме обновите лаунчер до последнего стабильного релиза.':'Return to Classic styling or Solid background in the same section. If a problem persists, update to the latest stable launcher.'});
  }
}
