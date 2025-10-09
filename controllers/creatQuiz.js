const express = require('express')
const quizModel = require('../models/quizModel')
const subQuiz = require('../models/quizExamModel')

module.exports.createQuizs = async function(req, res){
    let {heading} = req.body;

    try{
        let QuizCreate = await quizModel.create({
            heading
        })
        res.redirect('/quiz');
    }
    catch(err){
        res.send(err.message);
    }
}
module.exports.createSubQuiz = async function(req, res) {
    
    let {heading, title, timeLimit, totalMarks} = req.body;

    try{
        let createsubQuiz = await subQuiz.create({
            heading,
            title,
            Time:timeLimit,
            Marks:totalMarks
        })
        res.redirect('/quiz/quizSub')
    }
    catch(err){
        res.send(err.message)
    }
}