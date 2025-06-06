const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    heading : String,
    author: String,
    content:String,
    Date :{
       type: Date,
       default: Date.now  
    }
});
module.exports = mongoose.model("blog", blogSchema);