// npm init -y
// npm i express

// npm i nodemon

//  require statement imports 
const express =  require("express");
const app=express();

require("dotenv").config();
const PORT= process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes dor todo api
