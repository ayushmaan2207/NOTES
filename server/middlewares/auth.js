const jwt= require("jsonwebtoken");
require("dotenv").config();
const User= require("../models/User");

// auth
exports.auth= async(req,res,next)=>{
    try{
        // extract token
        const token= req.cookie.token
                        || req.body.token
                        ||req.header("Authorisation").replace("Bearer ","");
        // check token
        if(!token){
            return res.status(401).json({
                sucess:false,
                message:"Token is missing",
            })
        }

        // verify token
        try {
            const decode= jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            req.user=decode;
        } catch (error) {
            return res.status(401).json({
                sucess:false,
                message:"Token is invalid",
            })
        }
        next();

    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:"Something went wrong in Auth",
        })
    }
}

// isStudent
exports.isStudent=async(req,res,next)=>{
    try {
        if(req.user.accountType!=="Student"){
            return res.status(401).json({
                sucess:false,
                message:"this is protected Route for Student only",
            })
        }
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            message:"user role cannot be verified",
        })
    }
}


// isInstructor
exports.isStudent=async(req,res,next)=>{
    try {
        if(req.user.accountType!=="Instructor"){
            return res.status(401).json({
                sucess:false,
                message:"this is Instructor Route for Student only",
            })
        }
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            message:"user role cannot be verified",
        })
    }
}


// isAdmin
exports.isStudent=async(req,res,next)=>{
    try {
        if(req.user.accountType!=="Admin"){
            return res.status(401).json({
                sucess:false,
                message:"this is protected Route for Admin only",
            })
        }
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            message:"user role cannot be verified",
        })
    }
}