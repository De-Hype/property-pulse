const jwt = require('jsonwebtoken');
const AppError = require('./AppError');

const requireAuth = (req, res, next)=>{
    const token = req.cookies.user_auth;
    if (token){
        jwt.verify(token, process.env.Jwt_Secret_Key,(err, decodedToken)=>{
            if (err){
                return next(new AppError('Invalid token', 401))
            }
            
            next()
        })
    } 
    return next(new AppError('Unknown user', 401))
}

module.exports = requireAuth;