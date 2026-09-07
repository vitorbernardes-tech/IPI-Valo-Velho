const savedTheme = localStorage.getItem('theme');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light');
const themeToggle = document.querySelector('.theme-toggle');
const themeToggleIcon = document.querySelector('.theme-toggle__icon');
const themeToggleText = document.querySelector('.theme-toggle__text');
const checkinButton = document.querySelector('#checkin-button');
const visitorName = document.querySelector('#visitor-name');
const checkinMessage = document.querySelector('#checkin-message');
const quizResult = document.querySelector('#quiz-result');

function applyTheme(theme) {
document.addEventListener('DOMContentLoaded', () => {

  const toggleBtn = document.querySelector('.theme-toggle');
  if (!toggleBtn) return;

  const iconSpan = toggleBtn.querySelector('.theme-toggle__icon');
  const textSpan = toggleBtn.querySelector('.theme-toggle__text');

  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
      if (iconSpan) iconSpan.textContent = '🌙';
      if (textSpan) textSpan.textContent = 'Escuro';
    } else {
      document.body.removeAttribute('data-theme');
      if (iconSpan) iconSpan.textContent = '☀️';
      if (textSpan) textSpan.textContent = 'Claro';
    }
  }

  // Executa ao carregar
  applyTheme(savedTheme);

  // 4. Alterna ao clicar
  toggleBtn.addEventListener('click', () => {
    const isCurrentlyDark = document.body.getAttribute('data-theme') === 'dark';
    const nextTheme = isCurrentlyDark ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
});
