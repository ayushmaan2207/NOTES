const User = require("../models/User");
const bcrypt = require("bcrypt");
const mailSender = require("../utils/mailSender");

// resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
  try {
    // get email from req body
    const { email } = req.body;
    // check user for this email, email verification
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Your email is not registered",
      });
    }
    // generate token
    const token = crypto.randomUUID();
    // update user by adding token & expiration time
    const updatedDetails = await User.findOneAndUpdate(
      { email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );
    // create url
    const url = `http://localhost:3000/update-password/${token}`;
    // send mail containing the url
    await mailSender(
      email,
      "Password Reset Link",
      `Password Reset Link: ${url}`
    );

    return res.status(200).json({
      success: true,
      message:
        "Reset Link email sent successfully, please check email and change password",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Somthing went wrong while sending Reset password mail ",
    });
  }
};

// resetPassword
exports.resetPassword = async (req, res) => {
  try {
    // data fetch
    const {password,confirmPassword,token}=req.body;
    // validation
    if(password!==confirmPassword){
        return res.json({
            success: false,
            message: "Password not matching",
          });
    }
    // get user detail form db using token
    const userDetails=await User.findOne({token:token});
    if(!userDetails){
        return res.json({
            success: false,
            message: "Invalid token",
          });
    }
    if(userDetails.resetPasswordExpires< Date.now()){
        return res.json({
            success: false,
            message: "token expired",
          });
    }

    // hash password
    const hashedPassword= await bcrypt.hash(password,10);

    // update password
    await User.findOneAndUpdate(
        {token:token},
        {passward:hashedPassword},
        {new:true}
    );

    return res.status(200).json({
        success: true,
        message: "Password Reset Successfull",
      });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Somthing went wrong while Reseting password",
    });
  }
};
