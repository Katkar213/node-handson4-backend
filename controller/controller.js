
const arr=[]
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const secret_key="ketan";


// register...............
const register=(req,res)=>{
    const data = req.body;


    const details = arr.find((item) => item.email === data.email);
  
    if (details) {
      return res.send({ msg:"User already registered" });
    }

      const hashpassword =bcrypt.hashSync(data.password,10);
      data.password = hashpassword;
      arr.push(data);

     const token= jwt.sign({usweemail:data.email},secret_key,{expiresIn:"36000000000000"})  //we generate jwt here..
   console.log(token)
      console.log(arr);

      return res.send({msg:"user registered",token:token});
}



// login.................
const login=(req,res)=>{
    const logindata = req.body;

    const logindetails = arr.find((item) => item.email === logindata.email);
  
    if (logindetails) {
       const validate=bcrypt.compareSync(logindata.password,logindetails.password)

      if(validate){

        const token=jwt.sign({useremail:logindata.email},secret_key,{expiresIn:"360000000000"});
        console.log(token)
        return res.send({msg:"User Login successfully",token:token})

  
      }
      else{
        return res.send({msg:"password is incorrect"})
      }
    }
    else{
      return res.send({msg:"user not found"})
    }
}

const home=(req,res)=>{
  res.send("hello")

}

module.exports={register,login,home}
