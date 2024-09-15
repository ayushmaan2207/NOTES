const Section=require("../models/Section");
const Course=require("../models/Course");

exports.createSection= async(req,res)=>{
    try {
        // data fetch and validation
        const {sectionName,courseId} =req.body;
        if(!sectionName|| !courseId){
            return res.status(400).json({
                sucess:false,
                message:"Missing Properties",
            })
        }
        // create section
        const newSection= await Section.create({sectionName});
        // TODO: do we need to delete id from course 
        // update course with section ObjectId
        const updatedCourseDetails=await Course.findByIdAndUpdate(
            courseId,
            {
                $push:{
                    courseContent:newSection._id,
                }
            },
            {new:true},
        )
        // HW: use populate to replace section & sub section both 
        return res.status(200).json({
            sucess:true,
            message:"Section created successfully",
            updatedCourseDetails,
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"Unable to create section",
            error:error.message,
        }) 
    }
}


exports.updateSection=async (req,res)=>{
    try {
        // data fetch and validation
        const {sectionName,sectionId} =req.body;
        if(!sectionName|| !sectionId){
            return res.status(400).json({
                sucess:false,
                message:"Missing Properties",
            })
        }
        // update data
        const section= await Section.findByIdAndUpdate(sectionId,{sectionName},{new:true});

        return res.status(200).json({
            sucess:true,
            message:"Section updated successfully",
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"Unable to update section",
            error:error.message,
        }) 
    }
}

exports.deleteSection=async (req,res)=>{
    try {
        // data fetch and validation -assuming we are sending ID in params
        const {sectionId} =req.params;
        if(!sectionId){
            return res.status(400).json({
                sucess:false,
                message:"Missing Properties",
            })
        }
        // delete data
        const section= await Section.findByIdAndDelete(sectionId,{new:true});

        return res.status(200).json({
            sucess:true,
            message:"Section deleted successfully",
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"Unable to delete section",
            error:error.message,
        })  
    }
}