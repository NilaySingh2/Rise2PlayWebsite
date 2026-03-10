// ── Accordion ────────────────────────────────────────────────
document.querySelectorAll('.accordion-hdr').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    const isOpen = item.classList.contains('open');
    // close all
    document.querySelectorAll('.accordion-item.open').forEach(el => el.classList.remove('open'));
    // toggle clicked
    if (!isOpen) item.classList.add('open');
  });
});

// ── Active nav link on scroll ─────────────────────────────────
const sections = document.querySelectorAll('section[id], .who-section');
const navLinks  = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const id = e.target.id;
      const match = document.querySelector(`.nav-link[href="#${id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { threshold: 0.35 });

document.querySelectorAll('section[id]').forEach(s => observer.observe(s));

// ── Mobile hamburger ─────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMenu.classList.remove('open'));
});

// ── Navbar scroll shadow ─────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.25)' : '0 2px 16px rgba(0,0,0,0.18)';
});
