const checkinButton = document.querySelector('#checkin-button');
const visitorName = document.querySelector('#visitor-name');
const checkinMessage = document.querySelector('#checkin-message');
const quizResult = document.querySelector('#quiz-result');

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
