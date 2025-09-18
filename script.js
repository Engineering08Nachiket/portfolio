// Smooth active nav and scroll
const links = [...document.querySelectorAll('[data-nav]')];
const sections = links.map(a => document.querySelector(a.getAttribute('href')));

function setActive() {
  const y = window.scrollY + 120;
  let activeIndex = 0;
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
themeBtn.addEventListener('click', () => {
  const isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Render projects from projects.js
import { projects } from './projects.js';
const grid = document.getElementById('projectGrid');

function card(p) {
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.blurb}</p>
    <div class="tags">${p.tags.join(' · ')}</div>
    <div style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap;">
      ${p.links.map(l => `<a class="btn ghost" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
    </div>
  `;
  return el;
}
projects.forEach(p => grid.appendChild(card(p)));
