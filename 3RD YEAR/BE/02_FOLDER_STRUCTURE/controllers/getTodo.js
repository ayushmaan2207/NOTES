// import model
const Todo = require("../models/Todo")

// define route handler

exports.getTodo =  async(req,res)=>{
    try {
        // fetch all todo items from database
        const todos =await Todo.find({});

        // response
        res.status(200).json({
            success:true,
            data:todos,
            message: "entire Todo Data fetched",
        })

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

exports.getTodoById= async(req,res)=>{
    try{
        // extract todo item by id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with given id" ,
            })
        }

        // data found 
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Todo ${id} data successfully fetched`
            }
        )
    }
    catch(err){
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