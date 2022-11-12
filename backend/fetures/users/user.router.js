const express = require('express');
const server = express();
const User = require("./user.model")


server.get('/', async (req, res) => {
  let user = await User.find()
  res.send(user)
})

server.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;

  try {
    let existinguser = await User.findOne({ email });
    if (existinguser) {
      res.status(404).send('we can"t able to create email alreay in use');
    } else {
      let user = await User.create({
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
    let existinguser = await User.findOne({ email });


    if (existinguser) {

      if (password === existinguser.password) {
        res.send({
          token: `${email}_@_${password}`,
          user: existinguser
        })
      } else {
        res.status(401).send("Password is not exist")
      }


    } else {
      res.status(404).send("User not exist")
    }
  } catch (error) {
    res.status(404).send(error.message)
  }

});

server.patch("/edit", async (req, res) => {
  let { email, newemail, newpassword } = req.body;

  try {
    let user = await User.updateOne({ email }, { email: newemail, password: newpassword });
    res.send({
      user,
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.delete("/delete", async (req, res) => {
  let { email } = req.body;
  try {
    let user = await User.deleteOne({ email })
    res.send(user, "user is deleted successfully")
  }
  catch (e) {
    res.status(404).send(e.message)
  }
})
module.exports = server;