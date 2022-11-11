require("dotenv").config();
const express = require('express');
const connect = require("./config/db.js");
const server = express();
const cors = require('cors');
server.use(express.json());
server.use(cors());
const userRouter = require("./fetures/users/user.router.js")
const PORT = process.env.PORT;
const URL = process.env.URL;

server.get("/",(req,res)=>{
    res.send("Hello world!")
})

server.use("/user",userRouter);

server.listen(PORT,async(req,res)=>{
    await connect();
    console.log(`server port ${PORT} listening on ${URL}`)
});
