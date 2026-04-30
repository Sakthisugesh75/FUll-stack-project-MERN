const notFound = (req, res, next) => {
    res.status(404);
    const error = new Error(`Not found - ${req.originalUrl}`);
    next(error);
};

const errorHandler = (err, req, res, next) => {
     console.log("ERROR:", err.message); // ✅ add this
    console.log("STACK:", err.stack);  
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.name === "CastError") {
        message = "Resource not found";
        statusCode = 404;
    }

    res.status(statusCode).json({
        message
    });
};

export { notFound, errorHandler };