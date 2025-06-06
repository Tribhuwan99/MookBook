const QuestionSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true }, // reference
  questionText: { type: String, required: true },
  options: {
    type: [String],
    validate: [opt => opt.length === 4, 'Must have exactly 4 options']
  },
  correctAnswer: { type: String, required: true },
  explanation: String,
  category: String,
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' }
});

module.exports = mongoose.model('Question', QuestionSchema);
