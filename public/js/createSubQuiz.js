document.getElementById('quizForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    exam: document.getElementById('exam').value,
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    timeLimit: document.getElementById('timeLimit').value,
    totalMarks: document.getElementById('totalMarks').value,
    difficulty: document.getElementById('difficulty').value,
  };

  try {
    const response = await fetch('/admin/add-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (result.success) {
      alert('Quiz added successfully!');
      document.getElementById('quizForm').reset();
    } else {
      alert('Error adding quiz!');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong!');
  }
});
