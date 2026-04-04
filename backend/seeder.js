import products from "./data/products.js";
import users from "./data/user.js";
import User from "./model/usermodel.js"
import Product from "./model/productModel.js"

import connectDB from "./config/db.js"

connectDB();

const importData =async()=>{
    try{
        await User.deleteMany();
        await Product.deleteMany();

        const CreateUsers = await User.insertMany(users);

        console.log(CreateUsers)
        const adminUser =CreateUsers[0].id;
        
        const sampleProducts= products.map((product)=>{
            return {...product, user:adminUser}
        })
        await Product.insertMany(sampleProducts);
        console.log("data imported");
        process.exit();
    }
    catch (err){
        console.log(err.message);
        process.exit(1);
    }
}
// importData();

const destroyData = async ()=>{

    try{
        await User.deleteMany();
        await Product.deleteMany();
        console.log("data destroyed successfully");
        process.exit();

    }
    catch (err){
        console.log(err)
        process.exit(1);
    }
}

if (process.argv[2]==="-d"){
    destroyData();
}else{
    importData();
}