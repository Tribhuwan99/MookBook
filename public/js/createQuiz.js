function addQuiz() {
      const titleInput = document.getElementById('quizTitle');
      const title = titleInput.value.trim();

      if (title !== '') {
        // Add to list visually
        const li = document.createElement('li');
        li.textContent = title;
        document.getElementById('quizList').appendChild(li);

        // Clear input
        titleInput.value = '';

        // Send data to backend (Example)
        fetch('http://localhost:3000/add-quiz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: title })
        })
        .then(res => res.json())
        .then(data => {
          console.log('Saved:', data);
        })
        .catch(err => console.error('Error:', err));
      }
    }