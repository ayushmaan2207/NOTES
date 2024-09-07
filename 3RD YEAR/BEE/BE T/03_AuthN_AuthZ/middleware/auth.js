const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth=(req,res,next)=>{
    try {
        // extract jwt token ( from body , cookies , header)
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","");
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Missing",
            });
        } 

        // verify token
        try{
            const payload = jwt.verify(token,process.env.JWT_SECRET);

            req.user=payload;
        }catch (error) {
            return res.status(401).json({
                success:false,
                message:"Token is Invalid",
            });
        }
        next();

    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Somthing went wrong while verifying the token",
        });
    }
}

exports.isStudent= (req,res,next)=>{
    try {
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for student",
            });
        } 
        next();

    } catch (error) {
        return res.status(401).json({
                success:false,
                message:"user role is not matching",
            });
    }
}

exports.isAdmin= (req,res,next)=>{
    try {
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for admin",
            });
        } 
        next();

    } catch (error) {
        return res.status(401).json({
                success:false,
                message:"user role is not matching",
            });
    }
}