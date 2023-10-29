const jwt =require("jsonwebtoken")
const secret_key="ketan";

const auth=(req,res,next)=>{

const BearerToken=req.headers["authorization"]

if(BearerToken){
    const token=BearerToken.split(" ")[1]
    console.log(token)
    
   const validate= jwt.verify(token,secret_key)

   if(validate){
      next();
   }

   return res.send({msg:"user not authorized"})
}


return res.send({msg:"user Not Allowed"})

}
module.exports=auth;