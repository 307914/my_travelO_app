
const usermodel = require("../model/user.model");
const { verifyToken } = require("../utils/jwtutil");

/**
 * 
 * @param {import("express").Request} req 
 * @param {*} res 
 * @param {*} next 
 */
const authMiddleware=async(req,res,next)=>{
    try{
        const {authToken}=req.cookies;
        const {number}=verifyToken(authToken);
        const data=await usermodel.findOne({number});
        if(data){
            res.locals.userdata=data;
            next();
        }
        else{
          res.status(403).json({message:"invalid token"});
        }
    }catch(error){
      res.status(404).json(error);
    }
}

module.exports=authMiddleware;