const notFound =(req,res,next)=>{

    const error = new Error(`Not found -${req.originalUrl}`);
    next(error);
}

const errorHandler=(err,req,res,next)=>{
    let statuscode =res.statuscode  === 200 ? 500 :res.statuscode;
    let message=err.message;

    if(err.name === "Casterror"){
        message ="Resources not found",
        statuscode=484;
    }
    res.statuscode(statuscode).json({
        message
    })

}
export {notFound,errorHandler}