
const express = require("express");
const app = express();
const PORT = 5000;
const cors = require('cors');
const { User } = require('./dbmodel.js');

app.use(cors());
app.use(express.json());

app.get('/',async (req,res)=>{
    const dta = await User.find()
    res.send(dta);
})

app.listen(PORT,()=>console.log("running port :",PORT));