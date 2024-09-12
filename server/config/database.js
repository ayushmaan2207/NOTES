const mongoose = require("mongoose");
require("dotenv").require();

exports.dbConnect= ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("DB Connected Successfully")
    })
    .catch(()=>{
        console.log("DB Connection Failed")
        console.error(error);
        process.exit(1);
    })
}