const express = require("express");
const app = express();
const PORT = 5000;

app.get("/",(req,res)=>{
    res.send("express home page")
})

app.listen(PORT,()=>console.log("running port :",PORT));