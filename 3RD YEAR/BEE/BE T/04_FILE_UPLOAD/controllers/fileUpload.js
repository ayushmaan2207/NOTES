const File = require("../models/file");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async(req,res)=>{
    try {
        // fetch file
        const file= req.files.file;
        console.log(file);
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

function isFileTypeSupported(type,supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadTocloudinary(file,folder) {
    const options={folder}
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.imageUpload= async(req,res)=>{
    try {
        // data fetch
        const {name,tags,email}=req.body;
        const file= req.files.imageFile;

        // validation
        const supportedTypes=["jpg","jpeg","png"];
        const fileType= file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success: false,
                message: 'File format not supported',
            })
        }

        // upload to cloudinary
        const response= await uploadTocloudinary(file,"FILE_UPLOAD");

        // db me data entry 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        })

        res.json({
            success:true,
            imageUrl: response.secure_url,
            message: "Image Successfully uploaded"
        })


    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message: "Something went wrong"
        })
    }
}

exports.videoUpload= async(req,res)=>{
    try {
        const {name,tags,email}= req.body;
        const file= req.files.videofile;

        

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message: "Something went wrong"
        })
    }
}