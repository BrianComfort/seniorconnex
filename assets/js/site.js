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

// 3. Reveal on scroll (handles .reveal, .reveal-left, .reveal-right, .reveal-scale)
(function () {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
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

// 4. Animated counters — data-count="240" (final number)
(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  if (!('IntersectionObserver' in window)) {
    counters.forEach(c => c.textContent = c.dataset.count);
    return;
  }
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target * eased;
      el.textContent = (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => io.observe(c));
})();

// 5a. Nav dropdown (Solutions menu)
(function () {
  const drops = document.querySelectorAll('.nav-drop');
  if (!drops.length) return;
  drops.forEach(drop => {
    const trigger = drop.querySelector('.nav-drop-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = drop.classList.contains('open');
      drops.forEach(d => d.classList.remove('open'));
      if (!wasOpen) drop.classList.add('open');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-drop')) drops.forEach(d => d.classList.remove('open'));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') drops.forEach(d => d.classList.remove('open'));
  });
})();

// 5b. Scroll progress bar
(function () {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  function update() {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
    bar.style.width = pct + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

// 5c. Tab switcher — [data-tabs] container, [data-tab="id"] buttons, [data-panel="id"] panels
(function () {
  const containers = document.querySelectorAll('[data-tabs]');
  containers.forEach(container => {
    const tabs = container.querySelectorAll('[data-tab]');
    const panels = container.querySelectorAll('[data-panel]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.dataset.tab;
        tabs.forEach(t => t.classList.toggle('active', t === tab));
        panels.forEach(p => p.classList.toggle('active', p.dataset.panel === id));
      });
    });
  });
})();

// 5d. Spotlight hover — tracks mouse for .spotlight elements
(function () {
  const els = document.querySelectorAll('.spotlight');
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  els.forEach(el => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
})();

// 6. Subtle parallax for [data-parallax] elements
(function () {
  const els = document.querySelectorAll('[data-parallax]');
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let ticking = false;
  function apply() {
    const y = window.scrollY;
    els.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(apply); ticking = true; }
  }, { passive: true });
})();
