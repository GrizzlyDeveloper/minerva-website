export function applyRelease045(articles) {
  for (const article of articles.filter(a => a.slug === 'schematic-catalog')) {
    article.minLauncherVersion = '0.4.45';
    article.verifiedAt = '2026-10-29';
    article.steps.splice(1, 0, article.locale === 'ru'
      ? 'Выберите одну из 12 тематических категорий: фермы, постройки, редстоун, хранение, транспорт и другие. Схематика может относиться к нескольким разделам. Исходные теги, например Gold Farm, работают как ключевые слова в строке поиска; стили и названия проектов не превращаются в сотни категорий.'
      : 'Choose one of 12 theme categories, such as farms, buildings, redstone, storage and transport. A schematic may belong to multiple themes. Original tags such as Gold Farm remain search keywords; styles and project names are not hundreds of category options.');
    article.errors += article.locale === 'ru'
      ? ' «Прочее» означает, что в сохранённых данных нет достаточно конкретной тематической метки. После изменения индекса обновите поиск, если прежняя страница результатов устарела.'
      : ' Other means that saved metadata does not provide a specific theme. Refresh search if an index update invalidates an older results page.';
  }
}
