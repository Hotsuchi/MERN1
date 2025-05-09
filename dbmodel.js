require('dotenv').config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI).then(()=>console.log("mongodb connected..")).catch((err)=>console.log("mongodb not connect.."));

const userSchema = new mongoose.Schema({
    uname:String,
    pass:Number
})
const User = mongoose.model('User',userSchema);


module.exports = { User };