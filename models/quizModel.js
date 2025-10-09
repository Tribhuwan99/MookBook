const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
  heading: { type: String, required: true },
  quizeid:{
    type: mongoose.Schema.Types.ObjectId, ref : 'quizExam'
  }
});

module.exports = mongoose.model('Quiz', QuizSchema);
