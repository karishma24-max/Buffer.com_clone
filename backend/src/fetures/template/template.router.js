const express = require("express");
const { updateOne, findOneAndUpdate } = require("./template.model");
const server = express();
const Template = require("./template.model");

server.get("/", async (req, res) => {
  let Templates = await Template.find();
  res.send(Templates);
});


server.get("/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const Templates = await Template.findById( id );
    res.send(Templates)
  } catch(e) {
    res.send(e.message)
  }
  
});

server.patch("/:id" , async (req , res) => {
    let  id  = req.params.id;

  

    try {

        const template = await Template.findByIdAndUpdate(id,

            {
                ...req.body
            },
            {
                new : true
            }

        );
        res.send(template)
        
    }
    catch(e) {
        res.status(404).send('Cant Update the Data it')
    }



})

module.exports = server;
