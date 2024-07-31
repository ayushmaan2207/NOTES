// npm init -y
// npm i express

// server Initiate
const express = require("express");
const app = express();

// used to parse req.body in express -> PUT or POST
const bodyParser = require("body-parser");
// specifically parse JSON data & sdd it to request.Body object
app.use(bodyParser.json());

// activate the server on 3000 port
app.listen(3000,()=>{
    console.log("server started at port no. 3000");
})

// Routes
app.get("/",(request,response)=>{
    response.send("hello ji ( ``3)");
})

app.post("/api/cars",(req,res)=>{
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted succesfully.");
})


const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    // useNewUrlParser: true,
    // useUnifiedTopology:true
})
.then(()=>{console.log("Connection Successful")})
.catch(()=>{console.log("Recieved an Error")});