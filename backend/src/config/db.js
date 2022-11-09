const mongoose = require('mongoose');
require("dotenv").config();
const URL = process.env.URL
console.log(URL)
const connect = async()=>{
    return await mongoose.connect(URL)
}

module.exports = connect;