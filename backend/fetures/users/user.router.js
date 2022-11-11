const express = require('express');
const server = express();
const User = require("./user.model")


server.get('/',async(req,res)=>{
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
  
        res.send({user});
      }
    } catch (e) {
      res.status(404).send(e.message);
    }
  });
  
  server.post("/signin", async (req, res) => {
    let { email, password } = req.body;
  
    try {
      let existinguser = await User.findOne({$and:[{email: email},{password:password}]});
      res.send({
        token: `${email}_@_${password}`,
        user:existinguser,
      });
  
      if (!existinguser) {
        res.status(404).send('Given wrong email id and password');
      }
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

  server.patch("/edit", async (req, res) => {
    let { email,newemail, newpassword } = req.body;
  
    try {
      let user = await User.updateOne({email},{email:newemail,password:newpassword});
      res.send({
        user,
      });
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

server.delete("/delete",async(req,res)=>{
    let{email} = req.body;
    try{
        let user = await User.deleteOne({email})
        res.send(user,"user is deleted successfully")
    }
    catch(e){
        res.status(404).send(e.message)
    }
})
module.exports =server;