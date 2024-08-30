// npm init -y
// npm i express

// npm i nodemon

// npm i mongoose - to set connection in mongodb
// npm i dotenv - to import all ele in process object

//  require statement imports 
const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware to parse json request body
app.use(express.json());
// import routes for todo api
const blog = require('./routes/blog');

// mount the todo API routes
app.use("/api/v1",blog);

// connect to the database
const dbConnect = require('./config/database');
dbConnect();

// Start Server 
app.listen(PORT,()=>{
    console.log("App is Running at the",PORT);
})

// Default Route 
app.get('/', (req,res) => {
    res.send(`<h1>HomePage</h1>`)
})