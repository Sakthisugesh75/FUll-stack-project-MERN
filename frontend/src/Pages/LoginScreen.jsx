import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { useLoginMutation } from "../slices/userApiSlices"
 import { toast } from "react-toastify"
 import {setCrendentials} from "../slices/authSlices"
const LoginScreen = () => {
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const[login,{isLoading}]=useLoginMutation();
 
  const submitHandler= async(e)=>{
    e.preventDefault();

    if(email === "" || password === ""){
      alert("please enter the field");
    }else{
      try{ 
        const res =await login({email,password}).unwrap(); 
         dispatch(setCrendentials({...res}))
        navigate("/")

      }catch(error)
      {
        toast.error (error?.data?.message)
      }
    }
  }

  return (
    <>  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-10">
 
        
       
 
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">Welcome back</h1>
        <p className="text-sm text-gray-400 font-light mb-8">Sign in to continue to your account</p>
 
<form onSubmit={submitHandler}>
 
        {/* Email */}
        <div className="mb-4">
          <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-300 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
          />
        </div>
 
        {/* Password */}
        <div className="mb-2">
          <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-300 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
          />
        </div>
 
        {/* Forgot */}
        <div className="text-right mb-6">
          <span className="text-xs text-emerald-600 cursor-pointer hover:text-emerald-700 font-medium">
            Forgot password?
          </span>
        </div>
 
        {/* Submit */}
        <button
          // onClick={handleSubmit}
          className="w-full h-11 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-150"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Sign in
        </button>
 
        </form>
 
        {/* Sign up */}
        <p className="text-center mt-6 text-xs text-gray-400">
          Don't have an account?{" "}
          <span className="text-emerald-600 font-medium cursor-pointer hover:text-emerald-700">
            Create one
          </span>
        </p>
      </div>
    </div>
    </>
  )
}

export default LoginScreen