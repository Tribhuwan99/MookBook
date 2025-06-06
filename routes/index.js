const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewears/isLoggedIn');
const blogModel = require("../models/blog_model");
const profileModel = require('../models/profile_model')


router.get('/', function(req, res){
    let token = req.cookies.token;
    res.render('home', {token});
})

router.get('/signup', function(req, res){
    res.render('signup');
})

router.get('/login', function(req, res){
    res.render('login');
})

router.get('/about', isLoggedIn , async function(req, res){
    let token = req.cookies.token;
    res.render('about', {token});
})


module.exports = router;