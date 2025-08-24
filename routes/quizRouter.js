const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewears/isLoggedIn');
const quizModel = require('../models/quizModel');
const createQuizs = require('../controllers/creatQuiz')

router.get('/', isLoggedIn, async function(req, res) {
    let token = req.cookies.token
    res.render('quiz', {token});
})
router.get('/createQuiz', async function(req, res){
    let token = req.cookies.token
    res.render('createQuiz')
})
router.post('/createQuiz', createQuizs)



module.exports = router;