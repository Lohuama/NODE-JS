const sharp = require('sharp')

let path = process.argv[2]
let width = Number(process.argv[3])

function resize(path, width){
    sharp(path).resize({width: width}).toFile('./temp/resize.jpg', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('e num é q funcionou')
        }
    })
}
resize(path, width)