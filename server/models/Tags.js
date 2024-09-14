const mongoose= require("mongoose");

const tagsSchema= new mongoose.Schema({
    name:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
    },
    course:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    }],
});

module.exports= mongoose.model("Tags",tagsSchema);