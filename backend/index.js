require("dotenv").config();
const express = require('express');
const connect = require("./config/db.js");
const server = express();
const cors = require('cors');
server.use(express.json());
server.use(cors());
const userRouter = require("./fetures/users/user.router")
const templateRouter = require("./fetures/template/template.router.js");
const postRouter = require("./fetures/Calender/calender.router.js");
server.use("/user",userRouter);
server.use("/post",postRouter);
server.use("/template",templateRouter);

server.get("/",(req,res)=>{
    res.send("Hello world!")
})


server.listen(8080,async(req,res)=>{
   try{
    await connect();
    console.log(`Database connected`)
   }
   catch(e){
    console.log(e)
   }
   console.log(`server listening at port ${8080}`)
});
