const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    propic :{
        type : String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    username : String,
    fullname : String, 
    email: String,
    phone: Number,
    dob : Date,
    gender: String,
    location:String,
    language:String,
    bio:String,
    // accountSta:String,
    member:Date,
    lastlogin:Date,
    role:String,
    subscrplan:String,
    socialmedia:String

});

module.exports = mongoose.model("profile", profileSchema);