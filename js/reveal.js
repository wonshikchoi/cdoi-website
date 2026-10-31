// Reveal on scroll — observes .section, .pubs, .join, and any .reveal element
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .pubs, .join, .reveal-me').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const siteNav = document.querySelector('nav.site-nav');
if (toggle && links) {
  const setMenu = (open) => {
    toggle.classList.toggle('open', open);
    links.classList.toggle('open', open);
    if (siteNav) siteNav.classList.toggle('menu-open', open);
  };
  toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setMenu(false));
  });
  // Close the menu if the viewport grows back to the desktop layout.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setMenu(false);
  });
}
