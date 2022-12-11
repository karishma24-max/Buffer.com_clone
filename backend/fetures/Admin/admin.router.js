const express = require("express");
const server = express();
const Admin = require("./admin.model.js");

server.get("/", async (req, res) => {
  try{
    let user = await Admin.find();
    res.send(user);
  } catch(e) {
    res.status(401).send(e.message);
  }
});

server.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  try {
    let existinguser = await Admin.findOne({ email });
    if (existinguser) {
      res.status(404).send('we can"t able to create email alreay in use');
    } else {
      let user = await Admin.create({
        name,
        email,
        password,
      });

      res.send({ user });
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.post("/signin", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await Admin.findOne({ email });
    if (user && user.email === email) {
      if (user.password === password) {
        res.send({
          token: `${email}:${password}`,
          user,
        });
      } else {
        res.status(401).send("Wrong Password");
      }
    } else {
      res.status(401).send("Email not found");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

server.get("/singleuser/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Admin.findById(id);
    res.send(user);
  } catch (e) {
    res.status(404).send("Id not found");
  }
});

server.patch("/", async (req, res) => {
  try{
    const {_id} = req.body
    const updates = req.body;

    const result = await Admin.findByIdAndUpdate(_id,updates,{new:true});
    res.send(result)
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.delete("/", async (req, res) => {
  let { _id } = req.body;

  const user = await Admin.findById(_id);
  if (user) {
    let Delete = await Admin.deleteOne({ _id });
    res.status(200).send(`user ${user.name} is deleted successfully`);
  } else {
    res.status(401).send("Id Not found");
  }
});

module.exports = server;
