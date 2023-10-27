
const express=require("express");
const app=express();
app.use(express.json())
const cors=require("cors");

const jwt=require("jsonwebtoken")
const secret_key="ketan";

const user={
    name:"ketan",
    role:"student"
}
token=jwt.sign(user,secret_key)
console.log(token)


const userRouter=require("./userRouter.js/Router")

app.use(cors())
app.use("/api",userRouter)


app.listen(4001,()=>{
    try{
        console.log("server is fine")
    }
    catch(err){
        console.log(err)
    }
  
})