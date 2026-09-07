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
  document.body.dataset.theme = theme;
  const isDark = theme === 'dark';

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
  }

  if (themeToggleIcon) {
    themeToggleIcon.textContent = isDark ? '🌙' : '☀️';
  }

  if (themeToggleText) {
    themeToggleText.textContent = isDark ? 'Escuro' : 'Claro';
  }

  localStorage.setItem('theme', theme);
}

document.body.dataset.theme = theme;
themeToggle?.addEventListener('click', () => {
  const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
});

checkinButton?.addEventListener('click', () => {
  const name = visitorName.value.trim();
  checkinMessage.textContent = name ? `Que bom ter você aqui, ${name}!` : 'Que bom ter você aqui!';
  visitorName.value = '';
});

document.querySelectorAll('[data-answer]').forEach((option) => {
  option.addEventListener('click', () => {
    const correct = option.dataset.answer === 'true';
    quizResult.textContent = correct ? 'Acertou! O amor é o centro.' : 'Quase! Tente outra opção.';
    quizResult.className = `quiz-result ${correct ? 'success' : 'try-again'}`;
  });
});
