const express = require("express");
const server = express();
const Template = require("./template.model");

server.get("/", async (req, res) => {
  let Templates = await Template.find();
  res.send(Templates);
});
server.get("/:id", async (req, res) => {
  let { id } = req.params;
  let Templates = await Template.findOne({ id });
  res.send(Templates);
});

module.exports = server;
