const File = require("../models/file");

exports.localFileUpload = async(req,res)=>{
    try {
        // fetch file
        // const file= req.files.file;

        // let path = __dirname+ "/files/" +Date.now();

        // file.mv(path,(err)=>{
        //     console.log(err);
        // });

        res.json({
            sucess:true,
            message:"local file uploaded successfully",
        });

    } catch (err) {
        console.log(err);
    }
}