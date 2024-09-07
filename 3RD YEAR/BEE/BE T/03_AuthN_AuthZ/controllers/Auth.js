// npm install bcrypt
// npm i jsonwebtoken

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User= require("../models/User");
require("dotenv").config();

// signup
exports.signup= async(req,res)=>{
    try{
        // get data
        const {name,email,password,role}=req.body;


        //  check if user already exist
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already Exists",
            });
        }


        // secure password
        let hashedPassword;
        try{
            hashedPassword=await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in hashing password",
            });
        }


        // create entry for user
        const user = await User.create({
            name,email,password:hashedPassword,role
        })

        return res.status(200).json({
            success:true,
            message:"User created Successfully",
        });
    }
    catch(e){
        console.error(e);
        return res.status(500).json({
            success:false,
            message:"Cannot create User please try it later",
        });
    }
}


// login
exports.login= async(req,res)=>{
    try{
        // data fetch
        const {email,password}= req.body;

        // validation on email & password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill all the details carefully"
            });
        }

        // check for registered user
        let user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not registered",
            })
        }

        // verify password & generate a JWT token

        const payload= {
            email: user.email,
            id:user._id,
            role:user.role,
        }

        if(await bcrypt.compare(password,user.password)){

            let token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                    expiresIn:"2h",
                });
            
            user =user.toObject();
            user.token=token;
            user.password=undefined;
            
            // cookie
            const options={
                expires: new Date( Date.now()  + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User Logged in successfully",
            })
        }
        else{
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            })
        }
    }  
    catch(e){
        console.error(e);
        return res.status(500).json({
            success:false,
            message:"Login Faliure",
        });
    }  
}