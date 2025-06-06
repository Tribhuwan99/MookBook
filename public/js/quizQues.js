let questions = [];
let current = 0;

async function loadQuiz() {
  const quizId = 'YOUR_QUIZ_ID_HERE'; // Replace with actual quiz ID
  const res = await fetch(`http://localhost:5000/api/questions/${quizId}`);
  questions = await res.json();
  showQuestion();
}

function showQuestion() {
  if (questions.length === 0) return;
  const q = questions[current];
  const html = `
    <h2>Question ${current + 1}</h2>
    <p>${q.questionText}</p>
    <ul>
      ${q.options.map(opt => `<li><label><input type="radio" name="opt"> ${opt}</label></li>`).join('')}
    </ul>
  `;
  document.getElementById('questionBox').innerHTML = html;
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    showQuestion();
  }
}

loadQuiz();
