const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewears/isLoggedIn');
const quizModel = require('../models/quizModel');
const quizExamModel = require('../models/quizExamModel')
// const quizQuesModel = require('../models/QuizQuestionModel')
const {createQuizs, createSubQuiz, createQuestion} = require('../controllers/creatQuiz');
const QuizQuestionModel = require('../models/QuizQuestionModel');

router.get('/', isLoggedIn, async function(req, res) {
    let token = req.cookies.token
    let quiz = await quizModel.find();
    res.render('quiz', {token, quiz});
})
router.get('/createQuiz', async function(req, res){
    let token = req.cookies.token
    res.render('createQuiz')
})
router.post('/createQuiz', createQuizs)

router.get('/:heading', async function(req, res){
    let token = req.cookies.token;
    const title = req.params.heading;
    let exams = await quizExamModel.find({heading:req.params.heading});
    res.render('quizSub' , {token,exams,title});
})

router.get('/create/subQuiz', async function(req, res){
    let exams = await quizModel.find();
    res.render('createSubQuiz',{exams})
})
router.post('/create/subquiz', createSubQuiz)


router.get('/create/quizquestion', async function(req, res){
    let exams = await quizExamModel.find();
    res.render('createQuizQuestion',{exams})
});
router.post('/create/quizquestion', createQuestion);


router.get('/:heading/:title', async function(req, res){
    let questions = await QuizQuestionModel.find();
    // res.send(questions);
    res.render('QuizQuestion',{questions})
})


module.exports = router;

