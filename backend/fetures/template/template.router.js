const express = require("express");
const server = express();
const Template = require("./template.model");

server.get("/", async (req, res) => {
  let Templates = await Template.find();
  res.send(Templates);
});


server.get("/:id", async (req, res) => {
  const {id} = req.params;
  
  try {
    const Templates = await Template.findById( id );
    res.send(Templates)
  } catch(e) {
    res.send(e.message)
  }
  
});

server.patch("/:id", async (req, res) => {
  try{
    const _id = req.params.id;
    const updates = req.body;

    const result = await Template.findByIdAndUpdate(_id,updates,{new:true});
    res.send(result)
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.delete("/:id", async (req, res) => {
  try{
    const _id = req.params.id;
    const result = await Template.deleteOne({_id});
    res.send(result)
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = server;