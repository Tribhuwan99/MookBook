const express = require('express')
const quizModel = require('../models/quizModel')

// module.exports.quizcreate= async function (req, res) {
//     let title = req.body
//     try{
//         let quiz = await quizModel.create({
//             title
//         })
//         res.redirect('/quiz')
//     }
//     catch(err){
//         res.send(err.message)
//     }
// }
module.exports.createQuizs = async function(req, res){
    let {heading} = req.body;

    try{
        let blogCreate = await quizModel.create({
            heading
        })
        res.redirect('/quiz');
    }
    catch(err){
        res.send(err.message);
    }
}