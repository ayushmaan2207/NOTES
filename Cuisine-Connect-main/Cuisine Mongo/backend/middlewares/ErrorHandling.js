const CreateError = (statusCode,message) =>{
    let error=new Error();
    error.status=statusCode;
    error.message=message;
    return error;
}

const ErrorHandler=(err,req,res,next)=>{
    let status=err.status?err.status:500;
    let message=err.message?err.message:"internal server error";
    res.status(status).send(message);
}

module.exports = { ErrorHandler, CreateError };