const navItems = [
  ['About', 'pages/about.html'],
  ['AI+Expert Core', 'pages/ai-expert-core.html'],
  ['Heritage Collaboration Hub', 'pages/heritage-collaboration-hub.html'],
  ['Education & Research', 'pages/lab-education-research.html'],
  ['Industry & Impact', 'pages/industry-impact.html'],
  ['Contact', 'pages/contact-us.html']
];

const pageHref = href => (window.location.pathname.includes('/pages/') ? `../${href}` : href);
const homeHref = () => (window.location.pathname.includes('/pages/') ? '../index.html' : 'index.html');

const isActive = href => {
  const current = window.location.pathname.replace(/\/$/, '');
  return current.endsWith(href.replace('pages/', '/pages/'));
};

export function renderNavbar() {
  const target = document.querySelector('[data-component="navbar"]');
  if (!target) return;

  const links = navItems
    .map(([label, href]) => `<a class="nav-link ${isActive(href) ? 'is-active' : ''}" href="${pageHref(href)}">${label}</a>`)
    .join('');

  target.innerHTML = `
    <nav class="navbar-shell" aria-label="Primary navigation">
      <div class="site-shell">
        <div class="flex min-h-[3.75rem] items-center justify-between gap-4">
          <a href="${homeHref()}" class="group flex items-center gap-3" aria-label="AI-Driven Expert Twins Lab home">
            <span class="grid size-10 place-items-center rounded-lg border border-cyanline/40 bg-cyanline/10 font-mono text-sm font-black text-cyanline shadow-glow">ET</span>
            <span class="max-w-48 text-sm font-black leading-tight text-white sm:max-w-none">AI-Driven Expert Twins Lab</span>
          </a>
          <div class="hidden items-center gap-1 xl:flex">${links}</div>
          <button class="rounded-lg border border-cyanline/30 p-2 text-blue-100 hover:border-ember hover:text-white xl:hidden" type="button" data-menu-button aria-expanded="false" aria-controls="mobile-menu">
            <span class="sr-only">Open navigation menu</span>
            <svg class="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div class="hidden pb-5 xl:hidden" id="mobile-menu" data-mobile-menu>
          <div class="grid gap-2 sm:grid-cols-2">${links}</div>
        </div>
      </div>
    </nav>
  `;

  const button = target.querySelector('[data-menu-button]');
  const menu = target.querySelector('[data-mobile-menu]');
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('hidden', isOpen);
  });
}

export function renderFooter() {
  const target = document.querySelector('[data-component="footer"]');
  if (!target) return;

  target.innerHTML = `
    <footer class="border-t border-cyanline/15 bg-midnight/95">
      <div class="site-shell">
        <section class="py-12 text-center" aria-labelledby="footer-partnership-title">
          <p id="footer-partnership-title" class="eyebrow text-ember">International Joint Partnership</p>
          <div class="mx-auto mt-8 grid max-w-4xl items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-10">
            <div class="institution-block">
              <h2>The University of Sydney</h2>
              <p>(AI &amp; Engineering)</p>
            </div>
            <div class="hidden h-14 w-px bg-cyanline/20 md:block" aria-hidden="true"></div>
            <div class="institution-block">
              <h2>Beijing Institute of Fashion Technology</h2>
              <p>(Design &amp; Cultural Heritage)</p>
            </div>
          </div>
        </section>

        <div class="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-blue-100 sm:flex-row">
          <nav class="flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Footer navigation">
            <a class="hover:text-ember" href="${pageHref('pages/about.html')}">About</a>
            <a class="hover:text-ember" href="${pageHref('pages/contact-us.html')}">Contact</a>
            <a class="hover:text-ember" href="${pageHref('pages/privacy-policy.html')}">Privacy Policy</a>
            <a class="hover:text-ember" href="${pageHref('terms-of-use.html')}">Terms of Use</a>
            <a class="hover:text-ember" href="${pageHref('citation.html')}">Citation</a>
          </nav>
          <p class="text-center text-xs text-blue-200/80 sm:text-right">&copy; AI-Driven Expert Twins Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

export function bootSharedComponents() {
  renderNavbar();
  renderFooter();
}
