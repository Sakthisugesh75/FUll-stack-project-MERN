import express from "express"
import cors from "cors"
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import {notFound,errorHandler} from "./middleware/errormiddleware.js"

const app=express();
app.use(log);
app.use(cors());

connectDB();
const port =5000;

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/users",auth,(req,res)=>{
    console.log("user page")
    res.send("user page")
})

 

function auth (req, res, next){
    console.log("Auth");
    next();
}



function log(req,res,next){
    console.log('LOG')
    next();
}

app.use("/api/products",productRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{

    console.log(`server is running at ${port}`);
   
})