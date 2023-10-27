
const arr=[]
const bcrypt = require("bcrypt");
// register...............
const register=(req,res)=>{
    const data = req.body;

    const details = arr.find((item) => item.email === data.email);
  
    if (details) {
      return res.send({ msg: "User already registered" });
    }

      // const salt = await bcrypt.genSalt(10);
      const hashpassword =bcrypt.hashSync(data.password,10);
      data.password = hashpassword;
      arr.push(data);
      console.log(arr);

      return res.send({msg:"user registered"});
}



// login.................
const login=(req,res)=>{
    const logindata = req.body;

    const logindetails = arr.find((item) => item.email === logindata.email);
  
    if (logindetails) {
       const validate=bcrypt.compareSync(logindata.password,logindetails.password)
      if(validate){
        return res.send({msg:"User Login successfully"})

  
      }
      else{
        return res.send({msg:"password is incorrect"})
      }
    }
    else{
      return res.send({msg:"user not found"})
    }

}

module.exports={register,login}