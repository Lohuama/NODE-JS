const http = require('http')
const url = require('url')
const fs = require('fs')

function handleFile(req, res, callback){
    let path = url.parse(req.url).pathname
    let fileName = '.'+path;

    fs.readFile(fileName, (err, data)=>{
        if(err){

            if(callback){
               if(!callback(req, res)){
                res.writeHead(404, {'Content-Type':"text/html;charset:utf-8"})
                res.end("<h1>Vish, deu ruim</h1>")
               }
            }
            
        }else{
            res.writeHead(200, {'Content-Type':"text/html"})
            res.write(data)
            res.end("<h1>Ihu, arrasô</h1>")
        }
    })
}

function handleRequest(req, res){
    let path = url.parse(req.url).pathname

    if(path == '/teste'){
        res.end("Teste");
        return true;
    }
    return false;
}

http.createServer((requeste, response)=>{
    handleFile(requeste, response, handleRequest)

}).listen(3000, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Roda Regina, roda')
    }
})