const File = require("../models/file");

exports.localFileUpload = async(req,res)=>{
    try {
        // fetch file
        const file= req.files.file;

        // create file path where file need to be stored on server
        const extention = file.name.split('.')[1];
        let path = __dirname + "/files/" +Date.now()+ `.${extention}`;

        // add path to move function
        file.mv(path,(err)=>{
            console.log(err);
        });

        // create successful response
        res.json({
            sucess:true,
            message:"local file uploaded successfully",
        });

    } catch (err) {
        console.log(err);
    }
}