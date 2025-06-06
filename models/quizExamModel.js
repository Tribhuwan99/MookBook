const mongoose = require('mongoose');

const quizExamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., SSC CGL
  description: String,
  level: { type: String, enum: ['easy', 'medium', 'hard'] }, // optional
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('quizExam', quizExamSchema);
