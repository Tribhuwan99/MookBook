const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  // exam: { type: mongoose.Schema.Types.ObjectId, ref: 'quizExam' }, // reference
  totalMarks: Number,
  timeLimit: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', QuizSchema);
