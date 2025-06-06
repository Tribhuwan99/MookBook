// document.getElementById("quizForm").addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value.trim();
//   const description = document.getElementById("description").value.trim();
//   const level = document.getElementById("level").value;

//   // const quizExam = { name, description, level };

//   // try {
//   //   const res = await fetch("/api/quiz-exams", {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify(quizExam)
//   //   });

// //     const data = await res.json();

// //     const messageEl = document.getElementById("message");

// //     if (res.ok) {
// //       messageEl.style.color = "green";
// //       messageEl.textContent = "Quiz Exam created successfully!";
// //       document.getElementById("quizForm").reset();
// //     } else {
// //       messageEl.style.color = "red";
// //       messageEl.textContent = data.message || "Failed to create quiz exam.";
// //     }
//   }
// //   //  catch (error) {
// //   //   document.getElementById("message").style.color = "red";
// //   //   document.getElementById("message").textContent = "Server error. Try again later.";
// //   //   console.error(error);
// //   // }
// // });
