const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let alunos = [
    {id: 0, nome: "Jose"},
    {id: 1, nome: "Maria"},
    {id: 2, nome: "Joao"},
    {id: 3, nome: "Marcos"},

]

app.use(bodyParser.urlencoded())

app.get("/", (req, res)=>{
    res.send('Hello World')
})

app.get("/alunos", (req, res)=>{    
    res.json(JSON.stringify(alunos))
})

//QUERY
app.get("/aluno", (req, res)=>{
    console.log(req.body)
    console.log(req.query)
    let aluno = alunos[req.query.id]
    res.json(aluno);
})

//PARAMS
// app.get("/aluno/:id", (req, res)=>{
//     console.log(req.params.id)
//     let aluno = alunos[req.params.id]
//     res.json(aluno);
// })

app.listen(300, ()=>console.log('Server Rodando..'))