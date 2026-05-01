import bcrypt from "bcrypt"
 const users=[
    {
        name:"Admin user",
        email:"admin@gmail.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true
    },
       {
        name:"sakthi",
        email:"sakthi@gmail.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:false
    },
       {
        name:"sugesh",
        email:"sugesh@gmail.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:false
    }
     
 ]
 export default users