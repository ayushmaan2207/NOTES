const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("DB Connected Successfully")
    })
    .catch((e)=>{
        console.log("DB Connection Issues")
        console.error(e);
        process.exit(1);
    })
}
module.exports=dbConnect;