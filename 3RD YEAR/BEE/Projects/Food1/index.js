const express = require("express");
const app= express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// 

const path= require("path");
app.set("view engine","ejs");
app.set('views',path.resolve("./views"));
app.use(express.urlencoded({extended:false}))

// 

app.use(express.json());

const dbConnect = require("./config/database");
dbConnect();

const user = require("./routes/user")
app.use("/",user);

app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
})
