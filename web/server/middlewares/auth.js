const jwt = require("jsonwebtoken");
const util = require('util');
const promisify = util.promisify;

exports.auth = async(req, res, next)=>{
    try{    
        const token = req.header("Authorization")?.replace("Bearer ", "");

        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token is missing',
            });
        }

        try{    
            const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
            req.user = decode;
        } catch(err){
            console.log(err);
            return res.status(401).json({
                success:false,
                token: token,
                error: err.message,
                message:'token is invalid',
            });
        }
        next();
    } catch(err){
        console.log(err);
        return res.status(401).json({
            success: false,
            message: "Something went wrong while validating the token"
        })
    }
}