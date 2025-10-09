const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewears/isLoggedIn');
const quizModel = require('../models/quizModel');
const quizExamModel = require('../models/quizExamModel')
const {createQuizs, createSubQuiz} = require('../controllers/creatQuiz')

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
    let token = req.cookies.token
    res.render('quizSub' , {token});
})
router.get('/create/subQuiz', async function(req, res){
    res.render('createSubQuiz')
})
router.post('/create/subquiz', createSubQuiz)


module.exports = router;