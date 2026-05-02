import asyncHandler from "../middleware/asyncHandler.js"
import User from "../model/usermodel.js";
import jwt from "jsonwebtoken";

const authUser = asyncHandler(async (req, res) => {
  

    const { email, password } = req.body;
    const user =await User.findOne({ email })

    if(user && (await user.matchPassword(password))){


const token =jwt.sign({userId:user._id},"yrtuenfsdkbs",{expiresIn:"30d"})

/// set Jwt as http

res.cookie("jwt",token,{
    httpOnly:true,
    secure:false,
    samesite:"strict",
    maxAge: 30*24*60*60*1000
})

        res.status(200).json({
            id:user_id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }else{
        res.status(401);
        throw new Error("Invalid Email or password")
    }
     
    console.log(user)
    res.send("Auth User"); // ✅ only one response
});

const registerUser =asyncHandler(async(req,res)=>{
const { name, email, password } = req.body; 
 const userExist = await User.findOne({ email });
if(userExist){
    res.status(400);
    throw new Error("User Already Exist")
}
const user =await User.create({
    name,
    email,
    password
})
     
    res.send("Registered User")
})

const logoutUser =asyncHandler(async(req,res)=>{
    res.send("logout User")
})
const getUserProfile =asyncHandler(async(req,res)=>{
    res.send("Get User Profile")
})
const updateUserProfile =asyncHandler(async(req,res)=>{
    res.send("update User Profile")
})
const getUsers=asyncHandler(async(req,res)=>{
    res.send("get users")
})
const getUsersById=asyncHandler(async(req,res)=>{
    res.send("get userBYId")
})
const deleteUser=asyncHandler(async(req,res)=>{
    res.send("deleteUser")
})
const updateUser=asyncHandler(async(req,res)=>{
    res.send("updateUser")
})

export {authUser,registerUser,logoutUser,getUserProfile,
    updateUserProfile,getUsers,getUsersById,
    deleteUser,updateUser
}