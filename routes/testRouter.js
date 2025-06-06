const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewears/isLoggedIn');

router.get('/', isLoggedIn, function(req, res) {
    let token = req.cookies.token;
    res.render('test', {token});
})

router.get('/testInter', isLoggedIn, function(req, res) {
    let token = req.cookies.token;
    res.render('test_inter', {token});
})


module.exports = router;