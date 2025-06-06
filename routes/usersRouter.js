const express = require('express');
const router = express.Router();
const path = require('path');
const {userRegister, userLogin, userLogout, userProfile, userEditProfile} = require('../controllers/auth_controller');

router.get('/signup', function(req, res){
    res.redirect('/signup');
})

router.post('/register', userRegister);

router.post('/login', userLogin);

router.get('/logout', userLogout);

module.exports = router;