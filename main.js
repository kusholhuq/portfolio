// Loader
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 500);
  }, 1000);
});


// Active nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav[href^="#"]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.anim').forEach(el => observer.observe(el));

// Copy email
function copyEmail() {
  navigator.clipboard.writeText('kusholhuq@gmail.com').then(() => {
    const btn = document.getElementById('copy-email');
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'kusholhuq@gmail.com'; }, 2000);
  });
}
