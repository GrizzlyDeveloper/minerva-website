// Source-reviewed release guidance; not a claim of in-game acceptance.
export function applyRelease044(articles) {
  function pair(slug,category,aliases,ru,en) {
    for(const [locale,row] of [['ru',ru],['en',en]]) {
      const [title,summary,requirements,steps,result,errors,recovery]=row;
      articles.push({slug,locale,title,summary,category,tags:aliases,aliases,related:[],minLauncherVersion:'0.4.44',verifiedAt:'2026-10-29',verification:'source',requirements,steps,result,errors,recovery});
    }
  }
  pair('schematic-catalog','content',['схематики','каталог','schematics','library','litematic'],
    ['Каталог и общая библиотека схематик','Найдите схематику и сохраните её в библиотеку подключённых сборок.','Minerva 0.4.44. Просмотр без входа; скачивание после авторизации Minerva. Мод для использования нужного формата устанавливается отдельно.',
      ['Откройте «Схематики → Каталог», задайте поиск и фильтры.','Откройте карточку, проверьте автора, источник, формат и известную совместимость.','Войдите в Minerva, выберите вложение и папку библиотеки; при необходимости создайте папку.','Нажмите «Добавить в библиотеку» и дождитесь сообщения с путём сохранения. При совпадении имён выберите действие.','В «Моей библиотеке» проверьте подключение нужных сборок к общей папке. Откройте файл совместимым игровым модом.'],
      'Файл сохранён локально и доступен подключённым сборкам. Структурная проверка не означает испытание постройки в Minecraft.',
      'Превью может отсутствовать, если изображение ещё не подготовлено или недоступно у источника. При ошибке установки прочитайте причину в диалоге. При исчерпании квоты показывается время сброса.',
      'Обновите каталог и проверьте сохранённый файл в библиотеке перед повторной загрузкой. Не удаляйте существующие схематики для повторного входа.'],
    ['Schematic catalog and shared library','Find a schematic and save it for connected instances.','Minerva 0.4.44. Browsing requires no login; downloads require a Minerva account. Install a game mod supporting the file format separately.',
      ['Open Schematics → Catalog and use search and filters.','Open an item and inspect attribution, format and known compatibility.','Sign in to Minerva, select an attachment and library folder, or create a folder.','Choose Add to library and wait for the destination message. Resolve filename conflicts when prompted.','In My library, check which instances use the shared folder. Open the file with a compatible game mod.'],
      'The file is stored locally and available to connected instances. Structural validation is not in-game testing.',
      'A preview may still be pending or unavailable from the source. Installation failures show their reason. A reached download limit shows its reset time.',
      'Refresh the catalog and check the saved library file before downloading again. Do not delete existing schematics to sign in again.']);
  pair('multiple-sessions','profiles',['твинки','несколько окон','Voxy','RocksDB','LOCK','multiple sessions'],
    ['Несколько игровых окон и Voxy','Запускайте разные профили и разделяйте данные модов, которым нужен эксклюзивный доступ.','Для одновременного входа на один сервер нужны разные игровые профили и разрешение правил сервера. Лаунчер не отменяет лимиты сервера.',
      ['Выберите профиль нужной сборки и запустите игру.','Повторный запуск обычной сборки требует подтверждения. Пока Warm Return занят, дополнительные окна запускаются обычно.','Если установлен Voxy, закройте игры и создайте отдельную копию сборки для твинка. «Только контент» копирует моды и ресурспаки без базы .voxy.','Назначьте копии другой игровой профиль и запустите отдельные сборки.'],
      'Клиенты используют разные профили, а копии сборок — разные папки данных. Не открывайте один локальный мир в двух процессах.',
      'RocksDBException / Failed to create lock file в .voxy означает невозможность открыть базу Voxy. В сообщении о занятости другим процессом причина — общий доступ к той же базе.',
      'Не удаляйте LOCK работающей базы. Закройте игры и разделите папки сборок. Для другого зависания сохраните latest.log и crash-report.'],
    ['Multiple game windows and Voxy','Use different profiles and separate data for mods requiring exclusive access.','Simultaneous connections to one server require distinct game profiles and permission under its rules. The launcher does not bypass server limits.',
      ['Select an instance profile and launch the game.','Confirm an additional launch of an ordinary instance. Extra windows launch normally while the Warm Return slot is occupied.','With Voxy installed, close the games and create a separate instance copy for the other profile. Content-only copying includes mods/resource packs without the .voxy database.','Assign another game profile to the copy and launch the separate instances.'],
      'Clients use distinct profiles and instance copies have separate data folders. Never open one local world from two processes.',
      'RocksDBException / Failed to create lock file in .voxy means Voxy cannot open its database. A file-in-use message indicates another process has the same database open.',
      'Do not delete the LOCK of an active database. Close the games and separate instance folders. Preserve latest.log and the crash report for other hangs.']);
  pair('mod-update-dependencies','content',['обновление модов','MatLib','dependencies','rollback'],
    ['Зависимости при обновлении модов','Новая версия мода может потребовать дополнительную библиотеку.','Перед изменением модов завершите игровые сессии этой сборки. Выбирайте библиотеку для той же версии Minecraft и загрузчика.',
      ['Проверьте список обновлений перед подтверждением.','Если обновление остановлено из-за отсутствующей зависимости, прочитайте название библиотеки в сообщении.','Найдите и установите нужную совместимую библиотеку в выбранную сборку. Например, EBE Reloaded 0.13.3 для Fabric 26.3 требует MatLib.','Повторите обновление мода и проверьте сборку перед игрой.'],
      'Отказ по отсутствующим зависимостям происходит до замены прежнего файла мода. Успешные обновления других модов в пакете учитываются отдельно.',
      'В старых версиях может отображаться внутренний ID: gnefBeV1 — MatLib. Это не сообщение о блокировке сервера.',
      'Не удаляйте старый мод до успешной замены. При проблеме после обновления используйте сохранённую копию отката; новые зависимости устанавливаются отдельно.'],
    ['Mod update dependencies','A new mod version can require an additional library.','Close this instance’s game sessions before changing mods. Select dependencies for the same Minecraft version and loader.',
      ['Review the update list before confirming.','If an update is blocked by a missing dependency, read the library name in the message.','Find and install a compatible dependency into the selected instance. For example, EBE Reloaded0.13.3 for Fabric26.3 requires MatLib.','Retry the mod update and check the instance before playing.'],
      'The missing-dependency rejection happens before the old mod file is replaced. Other successful updates in a batch are tracked separately.',
      'Older launchers may show an internal ID: gnefBeV1 is MatLib. This is not a server restriction.',
      'Keep the old mod until replacement succeeds. If an updated mod causes trouble, use its rollback copy; new dependencies are installed separately.']);
  for(const a of articles.filter(a=>a.slug==='warm-return')) {
    a.minLauncherVersion='0.4.44';a.verifiedAt='2026-10-29';
    a.requirements=a.locale==='ru'?'Fabric 1.21.1, 1.21.4, 1.21.10, 1.21.11, 26.2 и 26.3. В новых поддерживаемых сборках включён по умолчанию; сохранённые настройки не меняются.':'Fabric1.21.1,1.21.4,1.21.10,1.21.11,26.2 and26.3. Enabled by default in new supported instances; saved choices are preserved.';
    a.steps[0]=a.locale==='ru'?'Проверьте Warm Return в настройках поддерживаемой сборки. Опцию можно отключить.':'Check Warm Return in supported instance settings. You can turn it off.';
    a.steps.push(a.locale==='ru'?'Пока слот Warm Return занят, дополнительные игры запускаются обычно. Для Voxy используйте отдельные папки сборок.':'Additional games launch normally while standby is occupied. With Voxy, use separate instance folders.');
  }
}
