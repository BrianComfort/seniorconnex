(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 16);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

(function () {
  const nav = document.getElementById('nav');
  const btn = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  const drops = document.querySelectorAll('.nav-drop');
  const MOBILE = '(max-width: 940px)';
  const isMobile = () => window.matchMedia(MOBILE).matches;

  const collapseDrops = () => {
    drops.forEach(d => {
      d.classList.remove('open');
      const t = d.querySelector('.nav-drop-trigger');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  };

  // ---- Mobile sheet open/close ----
  const openMenu = () => {
    if (!links || !btn) return;
    links.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
    document.documentElement.classList.add('nav-open');
  };
  const closeMenu = () => {
    if (!links || !btn) return;
    links.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    document.documentElement.classList.remove('nav-open');
    collapseDrops();
  };

  if (btn && links) {
    btn.addEventListener('click', () => {
      if (links.classList.contains('open')) closeMenu();
      else openMenu();
    });

    // Close the sheet only when a real navigation link is tapped.
    // The dropdown <button> trigger must NOT close it (handled below).
    links.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a && links.contains(a)) closeMenu();
    });
  }

  // ---- Dropdown "Who it's for" ----
  // Desktop: click-to-open floating menu (outside-click / Escape close).
  // Mobile: inline expand/collapse inside the sheet, without closing the sheet.
  drops.forEach(drop => {
    const trigger = drop.querySelector('.nav-drop-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = drop.classList.contains('open');
      collapseDrops();
      drop.classList.toggle('open', !wasOpen);
      trigger.setAttribute('aria-expanded', !wasOpen ? 'true' : 'false');
    });
  });

  // ---- Outside tap/click ----
  document.addEventListener('click', (e) => {
    // Collapse any open dropdown when clicking outside it.
    if (!e.target.closest('.nav-drop')) collapseDrops();
    // On mobile, tapping outside the nav closes the whole sheet.
    if (links && links.classList.contains('open') && nav && !nav.contains(e.target)) {
      closeMenu();
    }
  });

  // ---- Escape ----
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (links && links.classList.contains('open')) closeMenu();
    else collapseDrops();
  });

  // ---- Reset on resize to desktop ----
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      // Leaving mobile: never leave the sheet stuck open.
      if (links) links.classList.remove('open');
      if (btn) {
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Open menu');
      }
      document.documentElement.classList.remove('nav-open');
      collapseDrops();
    }
  });
})();

(function () {
  const els = document.querySelectorAll('.reveal, .reveal-scale');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in'), Math.min(i * 60, 240));
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  if (!('IntersectionObserver' in window)) {
    counters.forEach(c => c.textContent = (c.dataset.prefix || '') + c.dataset.count + (c.dataset.suffix || ''));
    return;
  }
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / 1300);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target * eased;
      el.textContent = prefix + (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animate(entry.target); io.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
})();

(function () {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

(function () {
  document.querySelectorAll('[data-tabs]').forEach(container => {
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
