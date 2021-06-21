const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../config/secret.js');

const restrict = (req,res,next) => {
    const token = req.headers.authorization

    if(!token){
        res.status(401).json("no token found")
    }else{
        jwt.verify(token, jwtSecret,(err,decoded)=>{
            if(err){
                res.status(401).json(err.message)
            }else{
                req.decodedToken = decoded
                next()
            }
        })
    }
}


module.exports = restrict