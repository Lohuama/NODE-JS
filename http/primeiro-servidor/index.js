const http = require('http')
const url = require('url')
const fs = require('fs')

function handleFile(req, res){
    let fileName = '.'+path;

    fs.readFile(fileName, (err, data)=>{
        if(err){

            if(path == '/teste'){
                response.end("Teste")
                return
            }
            response.writeHead(404, {'Content-Type':"text/html;charset:utf-8"})
            response.end("<h1>Vish, deu ruim</h1>")
        }else{
            response.writeHead(200, {'Content-Type':"text/html"})
            response.write(data)
            response.end("<h1>Ihu, arrasô</h1>")
        }
    })
}

http.createServer((requeste, response)=>{

    let path = url.parse(requeste.url).pathname
    if(path == "" || path == "/"){
        path = "/index.html"
    }
    


}).listen(3000, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Roda Regina, roda')
    }
})