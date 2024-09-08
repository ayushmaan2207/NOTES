const mongoose =  require("mongoose");
require("dotenv").config();

// npm i nodemailer
const nodemailer= require("nodemailer");

const fileSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});

// post middleware
fileSchema.post("save",async function(doc){
    try {
        // transporter (shift this under config folder)
        let transporter= nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        });

        // send mail
        let info= await transporter.sendMail({
            from: "FILE_UPLOAD - by Ayushmaan",
            to: doc.email,
            subject: "new file added to cloudinary",
            html:`<h2>Hello ji ( ''3)</h2>  <p>File Uploaded.</p> View here: <a href="${doc.imageUrl}"> ${doc.imageUrl}`
        })

    } catch (error) {
        console.log(error);
    }
})


module.exports = mongoose.model("File",fileSchema);