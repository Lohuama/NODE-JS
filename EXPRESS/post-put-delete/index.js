const express = require('express');

const path = require('path');

const app = express();

//MODIFICANDO ENDEREÇO
app.use(express.static(path.join(__dirname, 'cliente')))

//CRIANDO ROTA GET
app.get("/get", (req, res) => {

    //MODIFICANDO HEADER
    //res.set("Content-Type", "text/html")

    //MODIFICANDO O TIPO DO ARQUIVO
    res.type("json");

    //ENVIANDO RESPOSTA
    res.send('<h1>GET</h1>')
})

app.post("/", (req, res) => {
    res.send('<h1>POST</h1>')
})

app.put("/", (req, res) => {
    res.send('<h1>PUT</h1>')
})

app.delete("/", (req, res) => {
    res.send('<h1>DELETE</h1>')
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("Server Rodando")
})