const sharp = require('sharp');
const compress_images = require('compress-images')

let path = process.argv[2]
let width = Number(process.argv[3])

function resize(inputPath, outputPath, width){
    sharp(inputPath).resize({width: width}).toFile(outputPath, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('e num é q funcionou')
            compress(outputPath, './compressed/')
        }
    })
}
resize(inputPath,'./temp/resize.jpg', width)

function compress(outputInput, outputPath){
    compress_images(outputInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
function (error, completed, statistic) {
console.log("-------------");
console.log(error);
console.log(completed);
console.log(statistic);
console.log("-------------");
}
);

}