// Odin Recipes — small interaction layer
// Scroll reveals, staggered list entrances, and count-up stats.
// Everything here respects prefers-reduced-motion.

(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Stagger delays for list/grid children -------------------------
  document.querySelectorAll('.stagger').forEach((container) => {
    Array.from(container.children).forEach((child, i) => {
      child.style.transitionDelay = reduceMotion ? '0ms' : `${i * 80}ms`;
    });
  });

  // ---- Reveal-on-scroll ------------------------------------------------
  const revealTargets = document.querySelectorAll('[data-reveal]');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach((el) => io.observe(el));
  }

  // ---- Count-up stat numbers --------------------------------------------
  const counters = document.querySelectorAll('.count[data-target]');

  function animateCount(el) {
    const target = parseFloat(el.dataset.target);
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    counters.forEach((el) => { el.textContent = el.dataset.target; });
  } else {
    const counterIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => counterIo.observe(el));
  }
})();