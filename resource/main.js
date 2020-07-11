'use strict';

// let fs = require('fs');

// fs.readFile('./mccree.jpg',(error,data) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//         console.log(data.length);
//         console.log(data.toString('utf-8'));
        
//     }
// });

// try{
//     let data = fs.readFileSync('readme.txt','utf-8');
//     console.log(data);
// }catch(error){
//     console.log(error);
// }

// let data = 'Allez Allez Allez';
// fs.writeFile('readme.txt',data,error => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log('success');
//     }
// });
// let data = '无敌';
// fs.writeFileSync('output.txt',data);

// fs.stat('readme.txt',(error,stat) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log(`isFile: ${stat.isFile()}`);
//         console.log(`isDirectory: ${stat.isDirectory()}`);
//         if(stat.isFile()){
//             console.log(`size: ${stat.size}`);
//             console.log(`birth: ${stat.birthtime}`);
//             console.log(`modified: ${stat.mtime}`);
//         }
        
//     }
// });

// let rs = fs.createReadStream('readme.txt','utf-8');

// rs.on('data',chunk => {
//     console.log('Data:');
//     console.log(chunk);
// });

// rs.on('end',_ => {
//     console.log('End');
// });
// rs.on('error',error => {
//     console.log('Error: ',error);
// });

// let http = require('http');

// let server = http.createServer((request,response) => {
//     console.log(`${request.method}: ${request.url}`);
//     response.writeHead(200,{'content-type': 'text/html'});
//     response.end('<h1>Hello World Cup</h1>')
    
// });

// server.listen(8080);
// console.log('Server is running at http://localhost:8080/');

// let url = require('url');
// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));


// let fs = require('fs');
// let url = require('url');
// let path = require('path');
// let http = require('http');

// let root = path.resolve(process.argv[2] || '.');
// console.log('process.argv[0]',process.argv[0]);
// console.log('process.argv[1]',process.argv[1]);
// console.log('process.argv[2]',process.argv[2]);
// console.log(`Static root dir: ${root}`);

// let server = http.createServer((request,response) => {
//     let pathname = url.parse(request.url).pathname;
//     let filepath = path.join(root,pathname);
//     fs.stat(filepath,(error,stats) => {
//         if(!error && stats.isFile()){
//             console.log(`200 ${request.url}`);
//             response.writeHead(200);
//             fs.createReadStream(filepath,'utf-8').pipe(response,'utf-8');
//         }else if(stats.isDirectory()){
//             let filePath = path.join(root,'index.html')
//             fs.stat(filePath,(error,stats) => {
//                 if(!error && stats.isFile()){
//                     console.log('200 index.html');
//                     response.writeHead(200);
//                     fs.createReadStream(filePath).pipe(response);
//                 }
//             });
//         }else{
//             console.log(`404 ${request.url}`);
//             response.writeHead(404);
//             response.end('404 not found');
//         }
//     });
// });

// server.listen(8080);

// console.log('Server is running at http://localhost:8080/');

const crypto = require('crypto');
const hash = crypto.createHash('md5');
hash.update('Hello World Cup');
hash.update('Hello World Cup Champion');

console.log(hash);
console.log(hash.digest('base64'));
