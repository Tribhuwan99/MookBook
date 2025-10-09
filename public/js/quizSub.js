document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.start-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const quizId = btn.getAttribute('data-id');
      alert(`Starting quiz with ID: ${quizId}`);
      // Example redirect (uncomment if needed)
      // window.location.href = `/quiz/${quizId}.html`;
    });
  });
});
