// FeederLens — scroll reveal with noscript safety
(function () {
  if (!('IntersectionObserver' in window)) return;

  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  sections.forEach((s) => {
    s.classList.add('reveal-target');
    observer.observe(s);
  });
})();
