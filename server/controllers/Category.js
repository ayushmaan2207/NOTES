const Category=require("../models/Category");

// create tag
exports.createCategory= async(req,res)=>{
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
        const tagDetails= await Category.create({
            name:name,
            description:description,
        });

        return res.status(200).json({
            success:true,
            message:"Category created successfully",
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};

// get all tags
exports.getAllCategory= async(req,res)=>{
    try {
        const allCategory= await Category.find({},{name:true,description:true})
        return res.status(200).json({
            success:true,
            message:"All Category returned successfully",
            allCategory,
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};