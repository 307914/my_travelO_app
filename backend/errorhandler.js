const errorHandler=async(error,req,res,next)=>{
    
    res.status(error.status||500);
    res.send(error.messsage);
}
module.exports=errorHandler;