const express = require('express');
const quizExamModel = require('../models/quizExamModel');
const quizModel = require('../models/quizModel');


module.exports.createQuizExam = async function(req, res){
    let {name, description, level} = req.body;

    try{
        let exam = await quizExamModel.create({
            name,
            description,
            level
        })
        res.redirect('/quiz');
    }
    catch(err){
        res.send(err.message);
    }
    
}

module.exports.createQuiz = async function(req, res){
    let {title, description, totalMarks,timeLimit} = req.body;

    try{
        let quiz = await quizModel.create({
            title,
            description,
            totalMarks,
            timeLimit
        })
        res.send(quiz);
    }
    catch(err){
        res.send(err.message);
    }
}