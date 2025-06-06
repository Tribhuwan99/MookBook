const jwt = require('jsonwebtoken');
const userModel = require('../models/user_model');

module.exports = async function(req, res, next){
    if(!req.cookies.token){
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    try{
        let decode = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel.findOne({email:decode.email}).select("-password");
        req.user = user;
        next();
    }
    catch(err){
        return res.status(403).json({ message: "Invalid or expired token" });
    }

}