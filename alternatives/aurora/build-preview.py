"""Prepare a local visual alternative from the current homepage; no deployment."""
from pathlib import Path
import re

here=Path(__file__).resolve().parent
source=here.parents[1]
html=(source/'index.html').read_text(encoding='utf-8')
html=re.sub(r'<link rel="stylesheet" href="/home.css[^\"]*">','<link rel="stylesheet" href="./motion.css">',html)
html=html.replace('<title>Minerva | Minecraft Java</title>','<title>Minerva — Local design preview</title>')
html=html.replace('</head>','  <script src="./motion.js" defer></script>\n</head>')
html=html.replace('content="https://minervalauncher.com/assets/minerva-0.4.28-desktop.jpg"','content="https://minervalauncher.com/assets/minerva-cube.svg"')
html=html.replace('<a class="brand" href="/"','<a class="brand" href="/alternatives/aurora/"')
html=html.replace('/assets/favicon.png?v=brand-20261017','/assets/minerva-cube.svg')
start=html.index('    <section class="hero"')
end=html.index('    <section class="band"',start)
hero='''    <section class="hero" aria-labelledby="title">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow hero-eyebrow"><span class="status-dot" aria-hidden="true"></span>MINECRAFT JAVA <span class="eyebrow-divider">/</span> WINDOWS x64</p>
          <h1 id="title">Minerva<span class="title-period">.</span></h1>
          <p class="hero-motto">Easy. Quick. <span>Powerful.</span></p>
          <p class="intro" data-text="intro">Minecraft Java для Windows x64. Отдельные сборки, доступный контент и ваши игровые профили.</p>
          <div class="actions"><a class="primary" href="#download"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></svg><span data-text="downloadWindows">Скачать для Windows</span></a><a class="secondary" href="/help/first-steps/"><span data-text="getStarted">Начать работу →</span></a></div>
          <p class="muted hero-release" id="hero-release" role="status">Windows x64</p>
        </div>
        <div class="brand-scene" aria-hidden="true">
          <div class="scene-depth">
            <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
            <div class="logo-pedestal"></div>
            <img class="hero-logo" src="/assets/minerva-cube.svg" width="360" height="360" alt="">
            <div class="scene-label label-top"><span></span> MINERVA / JAVA</div>
            <div class="scene-label label-bottom">BUILT AROUND YOUR GAME <span>↗</span></div>
            <span class="scene-cross cross-one">+</span><span class="scene-cross cross-two">+</span>
          </div>
        </div>
      </div>
      <div class="hero-bottom"><p data-motion-text="heroFoot">Меньше рутины. Больше игры.</p><a href="#launcher"><span data-motion-text="explore">Что внутри</span><span class="scroll-arrow" aria-hidden="true">↓</span></a><span class="hero-index" aria-hidden="true">01 — MINERVA</span></div>
    </section>
'''
html=html[:start]+hero+html[end:]
# A small explanatory graphic, not a fabricated screenshot or live interface.
visual='''<div class="transfer-scene" aria-label="Схема переноса сборки" data-motion-label="transferLabel">
  <div class="source-packs"><div class="pack-source"><span class="source-mark">M</span>Modrinth<span>↗</span></div><div class="pack-source"><span class="source-mark">TL</span>TL<span>↗</span></div><div class="pack-source"><span class="source-mark">ZIP</span>ZIP / MRPACK<span>↗</span></div></div>
  <div class="transfer-path" aria-hidden="true"><i></i><i></i><i></i><span>→</span></div>
  <div class="destination-pack"><img src="/assets/minerva-cube.svg" width="54" height="54" alt=""><strong>Minerva</strong><span data-motion-text="separateCopy">Отдельная копия</span><small data-motion-text="sourceSafe">Оригинал остаётся на месте</small></div>
</div>'''
needle='<section class="band editorial" id="migration"><div>'
html=html.replace(needle,'<section class="band editorial migration-section" id="migration"><div class="editorial-copy">')
pos=html.index('    <section class="band editorial"><div><p class="eyebrow" data-text="cloudLabel"')
previous=html.rfind('</div></section>',0,pos)
html=html[:previous]+html[previous:].replace('</div></section>','</div>'+visual+'</section>',1)
# Separate, visually distinct sections retain all current bilingual copy.
html=html.replace('<section class="band editorial"><div><p class="eyebrow" data-text="cloudLabel"','<section class="band editorial cloud-section"><div><p class="eyebrow" data-text="cloudLabel"')
pos=html.index('    <section class="band editorial"><div><p class="eyebrow" data-text="restoreLabel"')
previous=html.rfind('</div></section>',0,pos)
cloud='''<div class="cloud-visual" aria-hidden="true"><div class="cloud-line"></div><div class="cloud-file file-back"><span>.minerva</span><i></i><i></i><i></i></div><div class="cloud-file file-front"><span class="file-dot"></span><strong>your-world.minerva</strong><div class="file-row">VERSIONS <span>✓</span></div><div class="file-row">HASHES <span>✓</span></div><div class="file-row">CATALOG CONTENT <span>✓</span></div><div class="file-foot">SAVE. SHARE. RESTORE.</div></div></div>'''
html=html[:previous]+html[previous:].replace('</div></section>','</div>'+cloud+'</section>',1)
html=html.replace('<section class="band editorial"><div><p class="eyebrow" data-text="restoreLabel"','<section class="band editorial restore-section"><div><p class="eyebrow" data-text="restoreLabel"')
html=html.replace('<section class="band" id="faq">','<section class="band faq-section" id="faq">')
html=html.replace('<section class="band" id="changelog">','<section class="band changelog-section" id="changelog">')
html=html.replace('<section class="band download"','<section class="band download"')
(here/'index.html').write_text(html,encoding='utf-8')
print('Local alternative created; original homepage unchanged.')
