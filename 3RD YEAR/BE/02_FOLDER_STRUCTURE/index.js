// npm init -y
// npm i express

// npm i nodemon

// npm i mongoose - to set connection in mongodb
// npm i dotenv - to import all ele in process object

//  require statement imports 
const express =  require("express");
const app=express();

require("dotenv").config();
const PORT= process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for todo api
const todoRoutes = require("./routes/todo");
const { connect } = require("mongoose");
// mount the todo API routes
app.use("/api/v1",todoRoutes);

// start server
app.listen(PORT,()=>{
    console.log(`app started at port no. ${PORT}`);
})

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HOME PAGE</h1>`)
})