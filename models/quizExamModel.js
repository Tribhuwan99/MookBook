const mongoose = require('mongoose')

const quizExamSchema = mongoose.Schema({
    title:{
        type:String,
        require: true,
    },
    heading:{
        type: String,
        require: true,
    },
    Time:Number,
    Marks:Number,
    Diffulcty:{
        type:String,
        enum:['easy', 'medium', 'hard'],
        default:'easy'
    },
    quizeid:{
    type: mongoose.Schema.Types.ObjectId, ref : 'Quiz', require :true
  }
})

module.exports = mongoose.model('quizExam', quizExamSchema)