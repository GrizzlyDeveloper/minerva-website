const navigationToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.header-nav');

navigationToggle?.addEventListener('click', () => {
  const isOpen = navigationToggle.getAttribute('aria-expanded') === 'true';
  navigationToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.addEventListener('click', (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  navigationToggle?.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));
}
