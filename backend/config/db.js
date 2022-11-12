const mongoose = require('mongoose');
require("dotenv").config();

const connect = async()=>{
    return await mongoose.connect(`mongodb+srv://mongo:mongo@cluster0.sbpkwdl.mongodb.net/Bluelock?retryWrites=true&w=majority`)
}

module.exports = connect;