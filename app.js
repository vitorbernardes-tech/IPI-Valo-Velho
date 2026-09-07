document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.theme-toggle');
  const iconSpan = document.querySelector('.theme-toggle__icon');
  const textSpan = document.querySelector('.theme-toggle__text');

  // Recupera tema salvo ou preferência do sistema
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

  // Aplica o tema logo no início
  applyTheme(savedTheme);

  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      const nextTheme = isDark ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('theme', nextTheme);
    });
  }

  // Check-in de visitantes
  const checkinButton = document.querySelector('#checkin-button');
  const visitorName = document.querySelector('#visitor-name');
  const checkinMessage = document.querySelector('#checkin-message');

  if (checkinButton && visitorName && checkinMessage) {
    checkinButton.addEventListener('click', () => {
      const name = visitorName.value.trim();
      if (name) {
        checkinMessage.textContent = `Que bom ter você aqui, ${name}! Seja muito bem-vindo(a).`;
        visitorName.value = '';
      }
    });
  }
});
