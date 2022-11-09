const express = require('express');

require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello World!");
})
app.listen(PORT, (req,res)=>{
    console.log("Connected")
})
