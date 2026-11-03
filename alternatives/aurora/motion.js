(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const strings = {
    ru: { heroFoot: 'Меньше рутины. Больше игры.', explore: 'Что внутри', separateCopy: 'Отдельная копия', sourceSafe: 'Оригинал остаётся на месте', transferLabel: 'Схема переноса сборки' },
    en: { heroFoot: 'Less setup. More play.', explore: 'Explore Minerva', separateCopy: 'A separate copy', sourceSafe: 'Your source stays in place', transferLabel: 'Pack migration diagram' }
  };
  const localize = () => {
    const locale = document.documentElement.lang === 'en' ? 'en' : 'ru';
    document.querySelectorAll('[data-motion-text]').forEach(el => { el.textContent = strings[locale][el.dataset.motionText]; });
    document.querySelectorAll('[data-motion-label]').forEach(el => { el.setAttribute('aria-label', strings[locale][el.dataset.motionLabel]); });
  };
  localize();
  new MutationObserver(localize).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  // Elements remain readable when JavaScript or IntersectionObserver is absent.
  if ('IntersectionObserver' in window && !reduced.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    document.querySelectorAll('.section-heading, .features article, .editorial, .faq-section, .changelog-section, .download').forEach((el, i) => {
      el.classList.add('reveal'); el.style.setProperty('--delay', `${el.matches('.features article') ? i % 4 * 65 : 0}ms`); observer.observe(el);
    });
    reduced.addEventListener('change', () => { if (reduced.matches) { observer.disconnect(); document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')); } });
  }
  const scene = document.querySelector('.brand-scene');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  let frame = 0;
  scene.addEventListener('pointermove', event => {
    if (reduced.matches || !pointer.matches) return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const r = scene.getBoundingClientRect();
      scene.style.setProperty('--rx', `${-(event.clientY - r.top - r.height / 2) / 38}deg`);
      scene.style.setProperty('--ry', `${(event.clientX - r.left - r.width / 2) / 38}deg`);
    });
  });
  scene.addEventListener('pointerleave', () => { cancelAnimationFrame(frame); scene.style.setProperty('--rx', '0deg'); scene.style.setProperty('--ry', '0deg'); });
  document.querySelectorAll('.features article').forEach(card => card.addEventListener('pointermove', event => {
    if (reduced.matches || !pointer.matches) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - r.left}px`);
    card.style.setProperty('--my', `${event.clientY - r.top}px`);
  }));
  const header = document.querySelector('body > header');
  const resize = new ResizeObserver(() => document.documentElement.style.setProperty('--site-header-height', `${header.offsetHeight}px`));
  resize.observe(header);
  // One progress line; transform updates are coalesced to animation frames.
  let scrollFrame = 0;
  const scroll = () => { if (scrollFrame) return; scrollFrame = requestAnimationFrame(() => {
    const range = document.documentElement.scrollHeight - innerHeight;
    document.documentElement.style.setProperty('--progress', range > 0 ? scrollY / range : 0);
    header.classList.toggle('scrolled', scrollY > 20); scrollFrame = 0;
  }); };
  addEventListener('scroll', scroll, { passive: true }); scroll();
})();
