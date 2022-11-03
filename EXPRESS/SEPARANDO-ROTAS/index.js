const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const aluno = require("./routes/aluno")



app.use(bodyParser.urlencoded())

app.use("/alumn", aluno)

app.get("/", (req, res)=>{
    res.send('Hello World')
})




app.listen(300, ()=>console.log('Server Rodando..'))