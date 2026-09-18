const english = {
  'nav.product': 'Product',
  'nav.content': 'Content',
  'nav.security': 'Security',
  'nav.status': 'Development status',
  'nav.home': 'Home',
  'hero.caption': 'Minecraft Java launcher / Windows',
  'hero.statement': 'Everything between you and the game, reduced to what matters.',
  'hero.copy': 'Isolated instances, Fabric content, shared resources, and transparent diagnostics in one focused desktop launcher.',
  'hero.explore': 'Explore the product',
  'hero.status': 'View status',
  'hero.by': 'Built by Grizzly Dev',
  'hero.scroll': 'Scroll to inspect',
  'product.kicker': 'THE LAUNCHER',
  'product.title': 'Separate worlds.<br>One quiet system.',
  'product.copy': 'Every setup keeps its own mods, saves, logs, memory, and launch state. Minerva manages the complexity without turning the launcher into the destination.',
  'product.window': 'MINERVA / INSTANCES',
  'product.build': 'DEVELOPMENT BUILD',
  'signal.isolated': 'Isolated',
  'signal.instance': 'Instance state',
  'signal.shared': 'Shared',
  'signal.cache': 'Verified cache',
  'signal.local': 'Local',
  'signal.diagnostics': 'Diagnostics',
  'content.kicker': 'CONTENT SYSTEM',
  'content.title': 'Add what belongs.<br>Know why it works.',
  'content.copy': 'Minerva resolves compatible content for the selected Minecraft and loader versions, then keeps every change visible and recoverable.',
  'discover.number': '01 / DISCOVER',
  'discover.title': 'Modrinth, in context.',
  'discover.copy': 'Search against the active instance. Compatibility, loader, game version, and dependencies remain part of the decision.',
  'discover.search': 'Search compatible content',
  'import.number': '02 / IMPORT',
  'import.title': 'Local files stay first-class.',
  'import.copy': 'Install a mod JAR from your computer directly into the selected instance.',
  'import.action': 'IMPORT FROM FILES',
  'resolve.number': '03 / RESOLVE',
  'resolve.title': 'No surprise dependencies.',
  'resolve.copy': 'Review required additions and incompatibilities before installation begins.',
  'resolve.mod': 'MOD',
  'resolve.ready': 'READY',
  'security.kicker': 'TRUST MODEL',
  'security.title': 'Your account is not<br>launcher content.',
  'security.copy': "Minerva uses the official Microsoft authorization path and keeps ownership checks intact. Your Microsoft password is never entered into Minerva.",
  'security.device': 'Device authorization',
  'security.identity': 'Identity chain',
  'security.ownership': 'Ownership verification',
  'security.passwords': 'NO PASSWORD COLLECTION',
  'security.bypass': 'NO OWNERSHIP BYPASS',
  'security.storage': 'LOCAL ACCOUNT STORAGE',
  'status.kicker': 'DEVELOPMENT PREVIEW',
  'status.title': 'Built carefully.<br>Released when ready.',
  'status.copy': 'Minerva is under active private development. Public downloads will appear after authentication approval and release-safety checks are complete.',
  'status.active': 'Active development',
  'footer.privacy': 'Privacy',
  'footer.terms': 'Terms',
  'footer.disclaimer': 'Not affiliated with Mojang Studios or Microsoft.',
  'legal.label': 'LEGAL',
  'legal.date': 'Effective September 18, 2026',
  'legal.contact': 'Contact',
  'legal.contactCopy': 'Questions may be directed to',
  'legal.contactLink': 'Grizzly Dev on GitHub',
  'privacy.title': 'Privacy policy',
  'privacy.lead': 'Minerva is a local desktop application developed by Grizzly Dev. This policy describes how development and future release builds handle account and application data.',
  'privacy.dataTitle': 'Data Minerva processes',
  'privacy.dataCopy': 'When a user chooses Microsoft sign-in, Minerva processes Microsoft, Xbox Live, XSTS, and Minecraft Services authentication tokens, the Minecraft profile name, and Minecraft UUID. Instance configuration, installed content metadata, launcher diagnostics, and game logs are also processed locally.',
  'privacy.purposeTitle': 'Purpose',
  'privacy.purposeCopy': 'This data is used only to authenticate the user, verify access to Minecraft: Java Edition, launch the game, manage local instances, resolve content, and diagnose failures requested by the user.',
  'privacy.storageTitle': 'Storage and transmission',
  'privacy.storageCopy': "Minerva does not operate a proprietary account server. Application state and authentication data remain on the user's device. Authentication requests are sent directly to official Microsoft, Xbox Live, and Minecraft Services endpoints. Mod metadata and downloads may be requested from Modrinth.",
  'privacy.telemetryTitle': 'Telemetry',
  'privacy.telemetryCopy': 'Minerva does not collect analytics, advertising identifiers, gameplay activity, or background telemetry. Local diagnostic logs are not uploaded automatically.',
  'privacy.passwordTitle': 'Passwords and ownership',
  'privacy.passwordCopy': "Microsoft account passwords are entered only on Microsoft's sign-in pages and are never available to Minerva. Minerva does not bypass Minecraft ownership checks and does not support cracked-account authentication.",
  'privacy.devTitle': 'Development status',
  'privacy.devCopy': 'Minerva is currently a development preview and is not distributed as a public release. Authentication storage and release security are being hardened before public distribution.',
  'terms.title': 'Terms of use',
  'terms.lead': 'These terms apply to future access to and use of Minerva development or release builds.',
  'terms.accessTitle': 'Legitimate access',
  'terms.accessCopy': 'Users must authenticate with their own Microsoft account and must hold any license required to access Minecraft: Java Edition. Minerva must not be used to bypass ownership, access, or platform restrictions.',
  'terms.servicesTitle': 'Third-party services',
  'terms.servicesCopy': 'Microsoft, Xbox Live, Minecraft Services, Mojang, Fabric, and Modrinth are independent services with their own terms and policies. Users remain responsible for complying with those terms.',
  'terms.devTitle': 'Development software',
  'terms.devCopy': 'Development builds may be incomplete and may change without notice. Back up important worlds and instance data before using unreleased builds.',
  'terms.independentTitle': 'No affiliation',
  'terms.independentCopy': 'Minerva is an independent project developed by Grizzly Dev. It is not an official Minecraft product and is not approved by or associated with Mojang Studios or Microsoft.',
};

const localizedElements = [...document.querySelectorAll('[data-i18n]')];
const russian = Object.fromEntries(localizedElements.map((element) => [element.dataset.i18n, element.innerHTML]));
const originalTitle = document.title;
const originalDescription = document.querySelector('meta[name="description"]')?.content ?? '';
const englishMetadata = {
  home: ['Minerva | Minecraft Java Launcher', 'Minerva is a focused Windows launcher and instance manager for Minecraft: Java Edition.'],
  privacy: ['Privacy | Minerva', 'Minerva privacy policy.'],
  terms: ['Terms | Minerva', 'Minerva terms of use.'],
};

function setLanguage(language) {
  const useEnglish = language === 'en';
  localizedElements.forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = useEnglish ? english[key] ?? russian[key] : russian[key];
  });

  document.documentElement.lang = language;
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.language === language);
  });
  document.querySelectorAll('.language-switch').forEach((toggle) => {
    toggle.classList.toggle('is-english', useEnglish);
  });

  const metadata = englishMetadata[document.body.dataset.page];
  document.title = useEnglish && metadata ? metadata[0] : originalTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = useEnglish && metadata ? metadata[1] : originalDescription;

  try { localStorage.setItem('minerva-language', language); } catch {}
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

let initialLanguage = 'ru';
try { initialLanguage = localStorage.getItem('minerva-language') || 'ru'; } catch {}
setLanguage(initialLanguage === 'en' ? 'en' : 'ru');

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
