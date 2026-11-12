export function applyRelease049(articles) {
  for (const locale of ['ru','en']) {
    const ru=locale==='ru', guide=articles.find(a=>a.slug==='schematic-catalog'&&a.locale===locale);
    guide.minLauncherVersion='0.4.49';
    guide.steps=guide.steps.map(step=>step.replace('иконки текстур','миниатюры настоящих моделей блоков').replace('texture icons','actual block-model thumbnails'));
    guide.errors=guide.errors.replace('Иконки отражают текстуру, а не точную форму блока.','Миниатюры используют модели и текстуры ресурсов Minecraft; для неизвестных блоков доступна нейтральная заглушка.').replace('Icons show textures rather than exact block shapes.','Thumbnails use Minecraft resource models and textures; unknown blocks have a neutral fallback.');
    guide.steps.push(ru?'Начиная с 0.4.49, в количестве воды и лавы учитываются только блоки-источники. Потоки исключены и из TXT. Это количество блоков, а не расчёт крафта или минимального числа вёдер.':'From 0.4.49, water and lava quantities include source blocks only. Flowing fluids are also excluded from TXT exports. These are block counts, not crafting quantities or a minimum bucket estimate.');
    const updates=articles.find(a=>a.slug==='updates'&&a.locale===locale);
    updates.steps.push(ru?'В 0.4.49 и новее окно обновления показывает историю изменений на языке лаунчера с отдельными пунктами списка. Чтобы сменить язык, используйте настройки лаунчера.':'In 0.4.49 and later, update prompts show release notes in the launcher language with individual list items. Change the launcher language in Settings.');
    for(const article of [guide,updates]){article.verifiedAt='2026-11-04';article.verification='runtime';}
  }
}
