const http = require('http')

//CRIANDO SERVIDOR
http.createServer((requeste, response)=>{
    //CABEÇALHO
    response.writeHead(200, {'Content-Type': 'text/html'})

    //ENVIAR RESPOSTA
    response.end("<h1>Hello World</h1>")
}).listen(3000, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Roda Regina, roda')
    }
})