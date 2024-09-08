// npm i cloudinary
// npm i express-fileupload

// create app
const express= require("express");
const app = express();

// find port
require("dotenv").config();
const PORT= process.env.PORT || 3000;

// add middleware
const fileupload= require("express-fileupload");
app.use(fileupload());
app.use(express.json());

// db connection
const db= require("./config/database");
db.dbConnect();

// cloud se connect
const cloudinary= require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api route mount
const upload = require("./controllers/fileUpload")
app.use("/api/v1/upload",upload);

// activate server
app.listen(PORT,()=>{
    console.log(`App is running at ${PORT} port`)
})