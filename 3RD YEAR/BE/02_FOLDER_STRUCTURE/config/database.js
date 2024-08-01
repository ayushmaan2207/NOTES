// npm i mongoose - to set connection in mongodb

// npm i dotenv - to import all ele in process object
require("dotenv").config();

const mongoose= require("mongoose");
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=> console.log("DB connection Successful"))
    .catch((error)=>{
        console.log("Issue in DB connection");
        console.error(error.message);
        // iska kya mtlb??????
        process.exit(1);
    })
}

module.exports=dbConnect;