/* =========================================================
   SENIORCONNEX — SHARED SITE JS
   Nav behavior · mobile menu · reveal-on-scroll
   ========================================================= */

// 1. Nav appearance — color & background based on what's behind it
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const darkSelectors = ['.hero-inner', '.section-dark', '.tex-blue-1', '.tex-blue-2',
                         '.tex-blue-4', '.tex-blue-5', '.tex-blue-6', 'footer', '.hero'];

  function update() {
    const scrolled = window.scrollY > 24;
    nav.classList.toggle('scrolled', scrolled);

    const probeY = 40;
    const els = document.elementsFromPoint(window.innerWidth / 2, probeY);
    let onDark = false;
    for (const el of els) {
      if (darkSelectors.some(sel => el.matches?.(sel) || el.closest?.(sel))) {
        onDark = true;
        break;
      }
    }
    nav.classList.toggle('on-light', !onDark);
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

// 2. Mobile menu toggle
(function () {
  const btn = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') links.classList.remove('open');
  });
})();

// 3. Reveal on scroll
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in'), i * 70);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();
