
const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const{register,login}=require("../controller/controller")
const arr = [];


userRouter.post("/register",register);


userRouter.post("/login", login);

module.exports = userRouter;
