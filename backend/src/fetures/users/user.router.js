const express = require('express');
const server = express();
const User = require("./user.model")
server.get('/',async(req,res)=>{
    let users = await User.find();
    res.send(users)
})

server.get('/:id',async(req,res)=>{
    let {id} = req.body;
    let user = await User.findOne({_id:id})
    res.send(user)
})

server.post('/',async(req,res)=>{
    let {name,email,password} = req.body;
    try{
        let existinguser = await User.findOne({email})
    if(existinguser){
        res.status(404).send('we can"t able to create email alreay in use');
    }
    else{
        let user = await User.create({
            name,email,password
        })

        res.send({
            user
        })
    }
    
    }
    catch (e){
        res.status(404).send(e.message);
    }
    
})

server.delete("/:id",async(req,res)=>{
    let{id} = req.body;
    try{
        let user = await User.deleteOne({_id:id})
        res.send(user)
    }
    catch(e){
        res.status(404).send(e.message)
    }
})
module.exports =server;