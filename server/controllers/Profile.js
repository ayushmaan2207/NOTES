const Profile=require("../models/Profile");
const User=require("../models/User");

exports.updateProfile=async(req,res)=>{
    try {
        // fetch and validate data
        const {dateOfBirth="",about="",contactNumber, gender}=req.body;
        // get user id
        const id=req.user.id;
        if(!contactNumber|| !gender|| !id){
            return res.status(400).json({
                success:false,
                message:"all fields are required",
            })
        }
        // find profile
        const userDetails= await User.findById(id);
        const profileId= userDetails.additionalDetail;
        const profileDetails= await Profile.findById(profileId);

        // update profile
        profileDetails.dateOfBirth=dateOfBirth;
        profileDetails.about=about;
        profileDetails.gender=gender;
        profileDetails.contactNumber=contactNumber;
        await profileDetails.save();

        return res.status(400).json({
            sucess:true,
            message:"profile updated successfully",
            profileDetails,
        }) 


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"Unable to update profile",
            error:error.message,
        }) 
    }
}

// delete account

exports.deleteAccount=async(req,res)=>{
    try {
        // find id and validate
        const id=req.user.id;
        const userDetails=awaitUser.findById(id);
        if(!userDetails){
            return res.status(404).json({
                success:false,
                message:"User not found",
            })
        }
        // delete profile
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetail});
        // TODO:unenroll user from courses

        // delete user
        await User.findByIdAndDelete({_id:id});

        // TODO: how can we schedule delete account
        return res.status(404).json({
            success:true,
            message:"User deleted Successfully",
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"Unable to delete account",
            error:error.message,
        })
    }
}