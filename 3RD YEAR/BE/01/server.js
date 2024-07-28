// npm init -y
// npm i express

const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("server started at port no. 3000");
})