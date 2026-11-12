export function applyRelease053(articles) {
  for (const locale of ['ru', 'en']) {
    const ru = locale === 'ru';
    const backups = articles.find(article => article.locale === locale && article.slug === 'backups');
    const instances = articles.find(article => article.locale === locale && article.slug === 'create-instance');
    if (!backups || !instances) throw new Error('Required instance guides are missing');
    Object.assign(backups, {
      minLauncherVersion: '0.4.53', verifiedAt: '2026-11-07',
      title: ru ? 'Резервные копии и восстановление сборки' : 'Back up and restore an instance',
      summary: ru ? 'Сохраните выбранные файлы в локальный ZIP и восстановите его как отдельную сборку.' : 'Save selected files in a local ZIP and restore it as a separate instance.',
      requirements: ru ? 'Для создания копии закройте игру. На диске должно хватать места для архива или распакованных файлов и запаса 512 MiB.' : 'Close the game before creating a backup. Keep enough disk space for the archive or extracted files and a 512 MiB reserve.',
      steps: ru ? [
        'Откройте «Настройки → Резервные копии» и выберите сборку.',
        'Отметьте нужные папки либо используйте рекомендованный состав. Нажмите «Создать копию».',
        'Найдите архив в разделе «Созданные копии». Нажмите «Распаковать как новую сборку».',
        'Дождитесь сообщения об успешном восстановлении. Откройте «Сборки» и найдите сборку с пометкой «из копии».',
        'Проверьте состав и запустите игру. Восстанавливаются только файлы, которые были включены в архив.',
      ] : [
        'Open Settings → Backups and select an instance.',
        'Choose folders or use the recommended selection, then select Create backup.',
        'Find the archive under Saved backups and select Restore as a new instance.',
        'Wait for the completion message. Open Instances and find the instance marked restored.',
        'Review its content and launch the game. Only files included in the archive are restored.',
      ],
      result: ru ? 'В списке появляется отдельная сборка с новым ID и собственной папкой.' : 'A separate instance with a new ID and its own folder appears in the list.',
      errors: ru ? 'При нехватке места освободите диск и повторите восстановление. Повреждённый ZIP или небезопасные пути внутри архива отклоняются.' : 'Free disk space and retry if there is insufficient room. Damaged ZIPs and unsafe archive paths are rejected.',
      recovery: ru ? 'Исходный архив остаётся доступен. Если в копию не включали миры или моды, восстановите их из другого архива или установите контент отдельно.' : 'The source archive remains available. If worlds or mods were excluded, restore them from another backup or install the content separately.',
    });
    instances.steps.push(ru
      ? 'В 0.4.53 можно нажать «Играть» у второй сборки во время подготовки первой. Запрос попадёт в очередь. Кнопка остановки отменяет запрос в очереди или подготовку текущего запуска. Текущая запись кеша может завершиться до отмены.'
      : 'In 0.4.53, Play on a second instance queues its request while the first is preparing. Stop cancels a queued request or the current launch preparation. An in-progress cache write may finish before cancellation.');
    instances.verifiedAt = '2026-11-07';
    articles.push({
      slug: 'instance-migration', locale, category: 'instances',
      title: ru ? 'Перенос Fabric-сборки на другую версию' : 'Move a Fabric instance to another version',
      summary: ru ? 'Создайте отдельную сборку для новой версии Minecraft и проверьте, какие файлы доступны.' : 'Create a separate instance for another Minecraft release and review available content.',
      tags: ['Fabric', 'migration', 'порт', 'версия'], aliases: ['autoport', 'перенос сборки'],
      related: ['backups', 'create-instance', 'startup-errors'],
      minLauncherVersion: '0.4.53', verifiedAt: '2026-11-07', verification: 'source',
      requirements: ru ? 'Нужны Fabric-сборка и доступ к каталогам контента. Доступность выпуска не гарантирует совместимость всех модов во время игры.' : 'A Fabric instance and access to content catalogs are required. An available release does not guarantee that every mod works together in game.',
      steps: ru ? [
        'Откройте меню сборки и выберите «Перенести на другую версию». Укажите целевую версию и нажмите «Проверить».',
        'Проверьте доступные файлы и пропуски, задайте имя новой сборки.',
        'При необходимости отметьте «Управление» и «Графика». Поддерживаемые параметры Sodium Extra переносятся, если мод включён в новую сборку.',
        'Для старых ресурс-паков можно включить перенос исходных ZIP без выпуска для целевой версии. Они копируются без конвертации и могут быть несовместимы.',
        'Подтвердите пропуски и нажмите «Проверить состав». При проблемах зависимостей используйте «Исключить и перепроверить» или измените выбор вручную.',
        'Нажмите «Создать сборку», дождитесь завершения и проверьте запуск. Ресурс-паки и шейдеры выбираются в настройках Minecraft.',
      ] : [
        'Open the instance menu and select Move to another version. Select a target release and choose Analyze.',
        'Review available files and omissions, then enter the new instance name.',
        'Optionally select Controls and Graphics. Supported Sodium Extra settings transfer when the mod is included.',
        'For old resource packs, optionally copy original ZIPs without a target release. They are copied without conversion and may be incompatible.',
        'Accept omissions and select Review transfer. For dependency problems, select Exclude and recheck or adjust the selection manually.',
        'Select Create instance, wait for completion and test the launch. Choose resource and shader packs in Minecraft settings.',
      ],
      result: ru ? 'Создаётся отдельная сборка с выбранным содержимым. Миры и произвольные конфиги модов в этот перенос не входят.' : 'A separate instance is created with the selected content. Worlds and arbitrary mod configurations are outside this migration.',
      errors: ru ? 'Отсутствующий выпуск, неизвестный локальный мод или недоступная зависимость могут потребовать пропуска файла. Сбой каталога требует повторной проверки после восстановления связи.' : 'Unavailable releases, unknown local mods or missing dependencies may require excluding a file. A catalog failure requires checking again after connectivity returns.',
      recovery: ru ? 'Продолжайте играть в исходной сборке, пока не проверили новую. Для сохранения миров и настроек используйте резервные копии.' : 'Keep using the source instance until you have tested the new one. Use backups to preserve worlds and settings.',
    });
  }
}
