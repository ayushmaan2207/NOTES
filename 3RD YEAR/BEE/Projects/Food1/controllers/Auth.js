// npm install bcrypt
// npm install jsonwebtoken

const bcrypt = require("bcrypt");
const User= require("../models/User");
const { response } = require("express");

// signup 
exports.signup= async(req,res)=>{
    try{
        // get data
        const {name,email,password,role}=req.body;


        //  check if user already exist
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.render('signup',{
                alreadyUser:true
            })
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


        return res.render("login");
        // return res.status(200).json({
        //     success:true,
        //     message:"User created Successfully",
        // });
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
        const user = await User.findOne({email});
        if(!user){
            return res.render('login');
            // return res.status(401).json({
            //     success:false,
            //     message:"User is not registered",
            // })
        }

        // verify password & generate a JWT token
        if(await bcrypt.compare(password,user.password)){
            const user = await User.create({
                email,password
            })
            return res.status(200).json({
                success:true,
                message:"Authentic User",
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

    }  
}