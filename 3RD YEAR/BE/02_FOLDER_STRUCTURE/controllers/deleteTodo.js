// import model
const Todo = require("../models/Todo")

// define route handler

exports.deleteTodo =  async(req,res)=>{
    try {
        const {id}= req.params;
        const todo = await Todo.findByIdAndDelete(id);

        res.status(200).json(
            {
                success:true,
                message:"Entry Deleted Successfully"
            }
        )
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"External server error",
                message:err.message
            }
        )
    }
}