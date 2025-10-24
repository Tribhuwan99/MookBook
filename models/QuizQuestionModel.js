const mongoose = require('mongoose');

const quizQuiestion = mongoose.Schema({
    Question:String,
    Opa:String,
    Opb:String,
    Opc:String,
    Opd:String,
    Correct:String,
    Marks:Number,
    Title:String
});
module.exports = mongoose.model('quizQuestion', quizQuiestion);
// module.exports = mongoose.model('quizQuestion', quizQuiestion)