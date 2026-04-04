
import mongoose from "mongoose";

const connectDB =async (params) => {
    
    try {
        const connect=await mongoose.connect
        ("mongodb+srv://sakthi:sakthi123@sakthi.acjau3a.mongodb.net/ecom")

console.log(`MongoDB Connected successfully`);

 
    } catch (error) {
        console.log(`error message :${error.message}`);
        process.exit(1)
    }
};
export default connectDB;