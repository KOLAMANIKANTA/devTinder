const express = require("express");
const app = express();

app.use('/test',(req,res)=>{
    res.send("Hello World!")
});

app.use('/login',(req,res)=>{
    res.send("Hello World Login!")
});

app.use('/register',(req,res)=>{
    res.send("Hello World Register!")
});


app.listen(3000,()=>{
    console.log("Server has been started in 3000");
});