const express = require('express');
const Post = require('./calender.model');
const server = express();

server.post("/", async (req, res)=>{
    let {date,text,image} = req.body;
    try{
        let post = await Post.create({date,text,image})
        res.send(post)
    }
    catch(e){
        res.status(404).send(e.message)
    }
})
server.get("/", async (req, res)=>{
   
    try{
        let post = await Post.find()
        res.send(post)
    }
    catch(e){
        res.status(404).send(e.message)
    }
})

module.exports =server;