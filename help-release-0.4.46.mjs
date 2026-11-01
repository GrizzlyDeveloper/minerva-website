export function applyRelease046(articles) {
  for (const article of articles.filter(a => a.slug === 'appearance')) {
    article.minLauncherVersion = '0.4.46';
    article.verifiedAt = '2026-11-01';
    article.errors += article.locale === 'ru'
      ? ' Если элитры пропадают при своём плаще Minerva, обновите лаунчер до 0.4.46 или новее и полностью закройте и заново запустите Minecraft. Рисунок плаща не заменяет текстуру крыльев: компонент сохраняет оригинальные элитры или использует стандартные. Исправление относится к поддерживаемым версиям Fabric.'
      : ' If elytra disappear with a custom Minerva cape, update to 0.4.46 or later, fully close Minecraft and relaunch it. Cape artwork does not replace the wing texture: the component preserves original wings or uses the default texture. This fix applies to supported Fabric versions.';
  }
}
