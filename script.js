// Active nav highlight on scroll
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

// Render projects into their areas
import { projects } from './projects.js';

const containers = {
  nvh: document.getElementById('grid-nvh'),
  controls: document.getElementById('grid-controls'),
  aero: document.getElementById('grid-aero')
};

function card(p) {
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.blurb}</p>
    <div class="tags">${(p.tags||[]).join(' · ')}</div>
    <div style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap;">
      ${(p.links||[]).map(l => `<a class="btn ghost" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
    </div>
  `;
  return el;
}

// render featured first, then the rest
Object.values(containers).forEach(c => c && (c.innerHTML = ""));
projects
  .sort((a,b) => (b.featured===true) - (a.featured===true))
  .forEach(p => {
    const c = containers[p.area];
    if (c) c.appendChild(card(p));
  });
