import asyncHandler from "../middleware/asyncHandler.js"
import User from "../model/usermodel.js";


const authUser = asyncHandler(async (req, res) => {
  

    const { email, password } = req.body;
    const user =await User.findOne({ email })

    if(user && (await user.matchPassword(password))){
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