const SubSection=require("../models/SubSection");
const Section=require("../models/Section");
const {uploadImageToCloudinary}= require("../utils/imageUploader");

exports.createSubSection= async(req,res)=>{
    try {
        // data/video fetch and validation
        const{sectionId,title,timeDuration,description}=req.body;
        const video=req.files.videoFile;
        if(!sectionId|| !title|| !timeDuration|| !description|| !video){
            return res.status(400).json({
                sucess:false,
                message:"All fields are required",
            });
        }
        // upload video to cloudinary
        const uploadDetails=await uploadImageToCloudinary(video,process.env.FOLDER_NAME);
        // create a sub-section
        const subSectionDetails= await SubSection.create({
            title:title,
            timeDuration:timeDuration,
            description:description,
            videoUrl:uploadDetails.secret_url,
        })
        // update section with this subsection ObjectId
        const updatedSection=await Section.findByIdAndUpdate(
            {_id:sectionId},
            {
                $push:{
                    subSection:subSectionDetails._id,
                }
            },
            {new:true}
        );

        // HW: log updated section here, after adding populate query

        return res.status(400).json({
            sucess:false,
            message:"sub-section created successfully",
            updatedSection,
        });


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"Unable to create sub-section",
            error:error.message,
        }) 
    }
}


exports.updateSubSection= async(req,res)=>{
    try {
        // data/video fetch and validation
        const{subSectionId,title,timeDuration,description}=req.body;
        const video=req.files.videoFile;
        if(!subSectionId|| !title|| !timeDuration|| !description|| !video){
            return res.status(400).json({
                sucess:false,
                message:"All fields are required",
            });
        }
        // upload video to cloudinary
        const uploadDetails=await uploadImageToCloudinary(video,process.env.FOLDER_NAME);
        // update a sub-section
        const subSection= await SubSection.findByIdAndUpdate(
            subSectionId,
            {
                title:title,
                timeDuration:timeDuration,
                description:description,
                videoUrl:uploadDetails.secret_url,
            },
            {new:true}
        )

        return res.status(400).json({
            sucess:false,
            message:"sub-section updated successfully",
        });


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"Unable to update sub-section",
            error:error.message,
        }) 
    }
}

exports.deleteSubSection= async(req,res)=>{
    try {
        // data/video fetch and validation
        const{subSectionId}=req.params;
        if(!subSectionId){
            return res.status(400).json({
                sucess:false,
                message:"All fields are required",
            });
        }
        // delete a sub-section
        const subSection= await SubSection.findByIdAndDelete(
            subSectionId,
            {new:true}
        )

        return res.status(400).json({
            sucess:false,
            message:"sub-section deleted successfully",
        });


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"Unable to delete sub-section",
            error:error.message,
        }) 
    }
}