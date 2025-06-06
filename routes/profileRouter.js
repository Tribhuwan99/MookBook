const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewears/isLoggedIn');
const profileModel = require('../models/profile_model');
const {userProfile, userEditProfile} = require('../controllers/auth_controller');

router.get('/', isLoggedIn, async function(req, res) {
     let user = await profileModel.findOne({email:req.user.email});
        let fix = req.user.email;
        if(!user){
            res.render('createProfile', {fix});
        }
        else{
            res.render('profile', {user, fix});
        }
})

router.get('/createprofile', isLoggedIn, (req, res) => {
    let fix = req.user.email;
    res.render('createProfile', {fix});
})

router.get('/editprofile', isLoggedIn, async (req, res) => {
    let user = await profileModel.findOne({email:req.user.email});
    let fix = req.user.email;
    res.render('editProfile', {user, fix});
})


router.post('/createProfile', userProfile);

router.post('/editProfile', userEditProfile);


module.exports = router;