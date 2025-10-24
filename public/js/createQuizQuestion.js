// document.getElementById("questionForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const question = document.getElementById("questionText").value.trim();
//   const options = [
//     document.getElementById("option1").value.trim(),
//     document.getElementById("option2").value.trim(),
//     document.getElementById("option3").value.trim(),
//     document.getElementById("option4").value.trim(),
//   ];
//   const correctOptionIndex = document.getElementById("correctOption").value;
//   const heading = document.getElementById("heading").value.trim();
//   const marks = document.getElementById("marks").value.trim();
//   const explanation = document.getElementById("explanation").value.trim();

//   if (!question || options.some(opt => !opt) || correctOptionIndex === "") {
//     alert("Please fill in all fields properly!");
//     return;
//   }

//   // This is just a preview (frontend)
//   const data = {
//     question,
//     options,
//     correctOptionIndex: Number(correctOptionIndex),
//     heading,
//     marks: Number(marks),
//     explanation,
//     createdAt: new Date().toLocaleString(),
//   };

//   // Show output
//   const output = document.getElementById("output");
//   output.style.display = "block";
//   output.innerHTML = `
//     <h3>Question Added ✅</h3>
//     <p><strong>Question:</strong> ${data.question}</p>
//     <ul>
//       ${data.options
//         .map(
//           (opt, i) =>
//             `<li>${String.fromCharCode(65 + i)}. ${opt} ${
//               i === data.correctOptionIndex ? "(✔ Correct)" : ""
//             }</li>`
//         )
//         .join("")}
//     </ul>
//     <p><strong>Heading:</strong> ${data.heading}</p>
//     <p><strong>Marks:</strong> ${data.marks}</p>
//     ${
//       data.explanation
//         ? `<p><strong>Explanation:</strong> ${data.explanation}</p>`
//         : ""
//     }
//   `;

//   // Reset form
//   e.target.reset();
// });
