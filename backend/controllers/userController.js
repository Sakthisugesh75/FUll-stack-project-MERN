import asyncHandler from "../middleware/asyncHandler.js"
import User from "../model/usermodel.js"


const authUser = asyncHandler(async (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    console.log("Email:", req.body.email);
    console.log("Password:", req.body.password);

    const { email, password } = req.body;

    res.json({ email, password }); // just return what we received
});

const registerUser =asyncHandler(async(req,res)=>{
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