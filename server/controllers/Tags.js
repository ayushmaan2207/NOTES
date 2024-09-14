const Tag=require("../models/Tags");

// create tag
exports.createTag= async(req,res)=>{
    try {
        // fetch and validate data
        const {name,description}=req.body;
        if(!name|| !description){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        };

        // create entry in DB
        const tagDetails= await Tag.create({
            name:name,
            description:description,
        });

        return res.status(200).json({
            success:true,
            message:"tag created successfully",
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};

// get all tags
exports.getAllTags= async(req,res)=>{
    try {
        const allTags= await Tag.find({},{name:true,description:true})
        return res.status(200).json({
            success:true,
            message:"All tag returned successfully",
            allTags,
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};