const Course=require("../models/Course");
const Tag=require("../models/Tags");
const User=require("../models/User");
const {uploadImagesToCloudinary}= require("../utils/imageUploader");


// createCourse
exports.createCourse= async(req,res)=>{
    try {
        // fetch data
        const {courseName,courseDescription, whatYouWillLearn, price,tag}=req.body;
        // get thumbnail
        const thumbnail= req.files.thumbnailImage;
        // validation
        if(!courseName|| !courseDescription|| !whatYouWillLearn|| !price|| !tag|| !thumbnail){
            return res.status(400).json({
                success:false,
                message:"all fields are required",
            })
        }
        // check instructor to get its detail
        const userId=req.user.id;
        const instructorDetails = await User.findById(userId);
        if(!instructorDetails){
            return res.status(404).json({
                success:false,
                message:"Instructor details not found",
            })
        }

        // check given tag is valid or not
        const tagDetails= await Tag.findById(tag);
        if(!tagDetails){
            return res.status(404).json({
                success:false,
                message:"tag details not found",
            })
        }

        // upload ing to cloudinary
        const thumbnailImage=await uploadImagesToCloudinary(thumbnail,process.env.FOLDER_NAME);

        // create entry for new course
        const newCourse= await Course.create({
            courseName,
            courseDescription,
            instructor: instructorDetails._id,
            whatYouWillLearn:whatYouWillLearn,
            price,
            tag:tagDetails._id,
            thumbnail:thumbnailImage.secure_url,
        })

        // add the new course to the user schema of instructor
        await User.findByIdAndUpdate(
            {_id: instructorDetails._id},
            {
               $push:{
                    courses:newCourse._id,
               } 
            },
            {new:true},
        )

        // update tag schema
        // khud krooooooooooooooooooooo
        return res.status(500).json({
            success:false,
            message:"Course created Successfully",
            data:newCourse,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};

// getAllCourse
exports.getAllCourse= async(req,res)=>{
    try {
        const allcourse= await Course.find({},{
            courseName:true,
            price:true,
            thumbnail:true,
            instructor:true,
            ratingAndReviews:true,
            studentsEnrolled:true,
        }).populate("instructor").exec();

        return res.status(200).json({
            success:true,
            message:"Data for all courses fetched successfully",
            data:allcourse,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Cannot Fetch course data",
            error:error.message,
        })
    }
};
