const express = require("express");
const Post = require("./calender.model");
const server = express();

server.post("/", async (req, res) => {
  let { date, text, image } = req.body;
  try {
    let post = await Post.create({ date, text, image });
    res.send(post);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
server.get("/", async (req, res) => {
  try {
    let post = await Post.find();
    res.send(post);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
server.patch("/", async (req, res) => {
  try{
    const {_id} = req.body
    const updates = req.body;

    const result = await Post.findByIdAndUpdate(_id,updates,{new:true});
    res.send(result)
  } catch (e) {
    res.status(404).send(e.message);
  }
});
server.delete("/", async (req, res) => {
  let { _id } = req.body;

  const post = await Post.findById(_id);
  if (post) {
    let Delete = await Post.deleteOne({ _id });
    res.status(200).send(`post is deleted successfully`);
  } else {
    res.status(401).send("Id Not found");
  }
});
module.exports = server;
