export function applyRelease048(articles) {
  for (const locale of ['ru','en']) {
    const ru=locale==='ru';
    const guide=articles.find(a=>a.slug==='schematic-catalog'&&a.locale===locale);
    if (!guide) throw new Error('Schematic guide missing: '+locale);
    guide.minLauncherVersion='0.4.48'; guide.verifiedAt='2026-11-04'; guide.verification='runtime';
    guide.requirements=ru?'Minerva 0.4.48 или новее. Для скачивания после авторизации Minerva нужен доступ к сети. Локальный 3D-просмотр не требует установки мода Litematica.':'Minerva 0.4.48 or later. Downloads after Minerva authorization require network access. Local 3D preview does not require the Litematica mod.';
    guide.summary=ru?'Каталог, общая библиотека и локальный 3D-просмотр со слоями и списком материалов.':'Catalog, shared library and local 3D preview with layers and a material list.';
    guide.steps.push(...(ru?[
      'Для локального файла .litematic откройте 3D-просмотр в разделе «Схематики → Моя библиотека». Файл обрабатывается локально.',
      'Выберите «Все слои», «Диапазон» или «Один слой». Стрелки изменяют нижнюю и верхнюю границу либо высоту одного слоя. Относительная высота начинается с нуля на нижнем занятом слое.',
      'В поле «Фон» выберите светлый или тёмный фон сцены. Этот выбор сохраняется отдельно от цветовой темы лаунчера.',
      'Откройте «Материалы»: доступны иконки текстур, названия, поиск и количество. Выберите всю схематику или только видимые слои.',
      'Нажмите «Копировать список» или сохраните TXT. Формат — item: quantity, по одной позиции в строке; префикс minecraft: опускается, пространства имён модов сохраняются.'
    ]:[
      'For a local .litematic file open 3D preview under Schematics → My library. The file is processed locally.',
      'Choose All layers, Range or Single layer. Arrows change the lower/upper bounds or the single-layer height. Relative height starts at zero on the lowest occupied layer.',
      'Choose Light or Dark under Background. This scene preference is saved separately from the launcher colour theme.',
      'Open Materials for texture icons, names, search and quantities. Select the full schematic or the visible layers.',
      'Use Copy list or save TXT. The format is item: quantity, one item per line; the minecraft: prefix is omitted and mod namespaces are preserved.'
    ]));
    guide.errors+=(ru?' 3D-просмотр экспериментальный и использует ресурсы Minecraft 26.3: другие версии могут выглядеть иначе, неизвестные блоки показаны пурпурными кубами. Иконки отражают текстуру, а не точную форму блока. Схематики до 64 млн ячеек поддерживаются в пределах ограничений размера и числа блоков; превышение лимита выводит сообщение.':' The experimental 3D preview uses Minecraft 26.3 resources: other versions may look different and unknown blocks appear as magenta cubes. Icons show textures rather than exact block shapes. Schematics up to 64 million cells are supported within file-size and block-count limits; exceeding a limit shows an explanation.');
    const theme=articles.find(a=>a.slug==='interface'&&a.locale===locale);
    if (!theme) throw new Error('Interface guide missing: '+locale);
    theme.verifiedAt='2026-11-04';theme.verification='runtime';
    theme.steps.push(ru?'В 0.4.48 панели 3D-просмотра и материалов следуют цветовой теме лаунчера. Светлый/тёмный фон самой 3D-сцены выбирается отдельно внутри просмотра.':'In 0.4.48 the 3D preview and material panels follow the launcher colour theme. The 3D scene itself has a separate Light/Dark background selector.');
  }
}
