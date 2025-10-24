const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
  heading: { type: String, required: true },
  quizExam:[
    {
      type: String, ref : 'quizExam'
    }
  ]
});

module.exports = mongoose.model('Quiz', QuizSchema);
