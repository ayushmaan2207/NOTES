const mongoose = require("mongoose");
const { resetPasswordToken } = require("../controllers/ResetPassword");

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    passward:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        required:true,
        enum:["Admin","Student","Instructor"],
    },
    additionalDetail:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile",
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Courses", 
        }
    ],
    image:{
        type:String,
        required:true,
    },
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CoursesProgress",   
        }
    ]
})


module.exports = mongoose.model("User",userSchema);