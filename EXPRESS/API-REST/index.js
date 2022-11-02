const express = require('express');
const app = express();
const path = require('path')
const PORT = 5000;

app.get("/", (req,res)=>{
    console.log(req)
    res.send("<h1>GET</h1>")
})

app.listen(PORT, ()=>{
    console.log("Server Rodando...")
})