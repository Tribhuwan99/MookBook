const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewears/isLoggedIn');
const {createQuizExam, createQuiz} = require('../controllers/createQuizExam');
const quizExamModel = require('../models/quizExamModel');
const quizModel = require('../models/quizModel');

router.get('/', isLoggedIn, async function(req, res) {
    let token = req.cookies.token;
    let exam = await quizExamModel.find();
    res.render('quiz', {token, exam});
})
router.get('/quizques', isLoggedIn, (req, res) => {
    res.render('quizQuestion')
})

router.get('/createQuizExam', isLoggedIn, (req, res) =>{
    res.render('createQuizExam');
})

router.post('/createQuizExam', isLoggedIn, createQuizExam);

router.get('/createquiz', isLoggedIn, (req, res) =>{
    res.render('createQuiz');
})

router.post('/createquiz', isLoggedIn, createQuiz);

router.get('/:name', isLoggedIn,  async (req, res) =>{
    let quizs = await quizModel.find();
    res.render('showAllQuiz', {quizs});
})


module.exports = router;