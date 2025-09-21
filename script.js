// Active nav highlight (for smooth scroll feel)
const links = [...document.querySelectorAll('[data-nav]')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

function setActive() {
  const y = window.scrollY + 120;
  let activeIndex = -1;
  sections.forEach((sec, i) => {
    if (sec.offsetTop <= y) activeIndex = i;
  });
  links.forEach((a,i) => a.classList.toggle('active', i === activeIndex));
}
setActive();
window.addEventListener('scroll', setActive);

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme') || 'dark';
document.documentElement.classList.toggle('light', saved === 'light');
themeBtn?.addEventListener('click', () => {
  const isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
