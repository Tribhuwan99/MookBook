const express = require('express')
const quizModel = require('../models/quizModel')
const subQuiz = require('../models/quizExamModel')
const QuizQuestion = require('../models/QuizQuestionModel')


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
            heading : heading,
            title : title,
            Time:timeLimit,
            Marks:totalMarks
        })
        res.redirect('/quiz/quizSub')
    }
    catch(err){
        res.send(err.message)
    }
}

module.exports.createQuestion = async function(req, res){
    let {question, opa, opb, opc, opd, correct, title, Marks} = req.body;
    try{
        let cretaeQuestion = await QuizQuestion.create({
            Question : question,
            Opa:opa,
            Opb:opb,
            Opc:opc,
            Opd:opd,
            Correct:correct,
            Title:title,
            Marks:Marks
        }) 
        res.redirect('/quiz/quizSub')
    }
    catch(err){
        res.send(err);
    }
}