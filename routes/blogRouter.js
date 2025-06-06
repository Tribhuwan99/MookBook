const express = require('express');
const router = express.Router();
const {createBlog, editBlog} = require('../controllers/createBlog');
const isLoggedIn = require('../middlewears/isLoggedIn');
const blogModel = require("../models/blog_model");

router.get('/', isLoggedIn , async function(req, res){
    let token = req.cookies.token;
    let blogs = await blogModel.find();
    res.render('blog',{token, blogs});
})

router.get('/readingBlog/:id', isLoggedIn, async (req, res) =>{
    let blog = await blogModel.findOne({_id:req.params.id});
    res.render('reading_blog', {blog});
})

router.get('/editBlog/:id', isLoggedIn, async (req, res) => {
    let blog = await blogModel.findOne({_id:req.params.id});
    res.render('edit_blog', {blog});
})

router.get('/createBlog', isLoggedIn, (req, res) => {
    res.render('create_blog');
})

router.post('/createBlog', createBlog);
router.post('/editBlog/:id', editBlog); 

module.exports = router;