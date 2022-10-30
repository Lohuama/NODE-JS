/* 3 POSSIBILIDADES DE IMPORTAR MODULOS: 1- IMPORTAR O MODULO QUE NÓS MESMOS CRIAMOS, 2- MODLULO ORIGINAL DO NODE, 3- MODULO QUE OUTRA PESSOA CRIOU. */


//MODULO DE ARQUIVO - NATIVO DO NODE
let fs = require('fs')

//CRIANDO ARQUIVO DE TEXTO
// fs.writeFile('test.txt', 'Hello World', function(error){ //substiui o conteudo que ja tem 
//     if(error) {throw error};
//     console.log("Deu bom!")
// })

// fs.appendFile('test.txt', ' - Ô loko meu', function(error){ //adiciona o conteudo
//     if(error) {throw error};
//     console.log("Onde come 2 come 3!")
// })

// fs.unlink('test.txt', function(error){ //apaga o arquivo
//     if(error) {throw error};
//     console.log("Apagou geral!")
// })

// fs.rename('test.txt', 'Arrasô.txt', function(error){ //renomeia o arquivo
//     if(error) {throw error};
//     console.log("Aê Junin!")
// })

// fs.readFile( 'Arrasô.txt', "UTF8", function(error, data){ //lê o arquivo
//     if(error) {throw error};
//     console.log(data)
// })

//CAPTURA OS ARGUMENTOS E PULA OS 2 PRIMEIROS
let args = process.argv.slice(2);

// O NOME DO ARQUIVO
let fileName = args[0];

fs.readFile(fileName, "utf-8", (error, data)=>{
    if(error) throw error;

    //TRANSFORMANDO EM LETRAS MAIUSCULAS
    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error)=>{
        if(error) throw error;

        console.log('Foi!')
    })
})