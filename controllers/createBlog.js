const express = require('express');
const blogModel = require('../models/blog_model');


module.exports.createBlog = async function(req, res){
    let {heading, content, author} = req.body;

    try{
        let blogCreate = await blogModel.create({
            heading,
            content,
            author
        })
        res.redirect('/blog');
    }
    catch(err){
        res.send(err.message);
    }
}

module.exports.editBlog = async function(req, res){
    let {heading, content, author} = req.body;
    let blog = await blogModel.findOneAndUpdate({_id:req.params.id}, {
        heading,
        content,
        author
    });
    res.redirect('/blog');
}