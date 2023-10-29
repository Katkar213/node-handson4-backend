
const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const{register,login,home}=require("../controller/controller")
const arr = [];
const auth=require("../controller/middlewear/auth")


userRouter.post("/register",register);


userRouter.post("/login", login);

userRouter.get("/home",auth, home);

module.exports = userRouter;
