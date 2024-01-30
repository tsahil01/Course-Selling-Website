const jwt = require('jsonwebtoken')
require('dotenv').config();

function authMiddleware(req, res, next){
    const authorization = req.headers.authorization;
    if(!authorization.startsWith("Bearer ")){
        res.status(400).json({
            msg: "Invalid Token (Bearer error)"
        })
        return;
    }
    const token = authorization.split(" ")[1]
    try{
        jwt.verify(token, process.env.JWT_SECRET)
        next();
    } catch(e){
        console.log(e)
        res.status(411).json({
            msg: "Not a right token"
        })
        return;
    }
}

module.exports = authMiddleware