const express = require('express');
const server = express();
const Template = require("./template.model")


server.get('/',async(req,res)=>{
    let Templates = await Template.find()
    res.send(Templates)
})

module.exports = server;