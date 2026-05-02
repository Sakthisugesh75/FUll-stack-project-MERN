import jwt from "jsonwebtoken"
import asyncHandler from "./asyncHandler"
import User from "../model/usermodel.js"


// protect routes
 const protect =asyncHandler(async(req,res,next)=>{
    let token =req.cookies.jwt;

    console.log(jwt);

if(!token){
    res.status(401);
    throw new Error("Not Auth ,No token")
}
try{
    const decoded =jwt.verify(token,"yrtuenfsdkbs");
    console.log(decoded)
    req.user =await User.findById(decoded.userId).select("-password")
    next()
}catch(err){
    res.status(401);
    throw new Error("Not auth, failed token")
}
    
 })


//Admin Routes