const express = require("express");
const router =  express.Router();

const {login,signup}= require("../controllers/Auth")

router.get("/",(req,res)=>{
    return res.render("login",{
        userExists:true,
        passCorrect:true
    });
})
router.get("/signup",(req,res)=>{
    return res.render("signup",{alreadyUser:false});
})

router.post("/login",login);
router.post("/signup",signup);

module.exports= router;