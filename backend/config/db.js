const mongoose = require('mongoose');
const url = `mongodb+srv://mongo:<password>@cluster0.sbpkwdl.mongodb.net/Bluelock?retryWrites=true&w=majority`
const connect = async()=>{
    return mongoose.connect(url)
}

module.exports = connect;