const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const userModel = require('../models/user_model');
const profileModel = require('../models/profile_model');
const { model } = require('mongoose');

module.exports.userRegister = async function(req, res) {
    
    let {email, username, password} = req.body;
    let user =  await userModel.findOne({email:email});
    if(user) return res.status(402).send("you have already account please Sign In");

    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, async function(err, hash){
            if(err) return res.send(err.message);
            else{
                try{
                    const createdUser = await userModel.create({
                        username,
                        email,
                        password:hash
                    })
                    let token = jwt.sign({email:createdUser.email, id:createdUser._id}, process.env.JWT_KEY);
                    res.cookie("token", token);
                    res.redirect('/');
                }
                catch(err){
                    console.log(err.message);
                }
            }
        })
    })
}

module.exports.userLogin = async function (req, res) {
    
    let {email, password} = req.body;
    let user = await userModel.findOne({email:email});
    if(!user) return res.send("something went wrong");
    bcrypt.compare(password, user.password, function(err, result){
        if(result){
            let token = jwt.sign({email:user.email, id:user._id}, process.env.JWT_KEY);
            res.cookie("token", token);
            res.redirect('/');
        }
        else{
            return res.status(502).send("something gone wrong");
        }   
    })
}

module.exports.userLogout = function(req, res){
    res.cookie("token", "");
    res.redirect('/');
}


module.exports.userProfile = async function(req, res){ 
    let {username, fullname, email, phone, dob, gender, location, language, bio, member, lastlogin, role, subscrplan, socialmedia} = req.body;
    try{
        let createProfile = await profileModel.create({
            username :username,
            fullname,
            email,
            phone, 
            dob, 
            gender, 
            location, 
            language, 
            bio, 
            // accountSta, 
            member, 
            lastlogin, 
            role, 
            subscrplan, 
            socialmedia
         })
         res.redirect('/profile');
    }
    catch(err){
        res.send(err.message);
    }
}


module.exports.userEditProfile = async function(req, res){
    let {username, fullname, email, phone, dob, gender, location, language, bio, member, lastlogin, role, subscrplan, socialmedia} = req.body;
    let updatepro = await profileModel.findOneAndUpdate({email}, {
            username,
            fullname,
            email,
            phone, 
            dob, 
            gender, 
            location, 
            language, 
            bio, 
            // accountSta, 
            member, 
            lastlogin, 
            role, 
            subscrplan, 
            socialmedia
})
    res.redirect('/profile');
}