'use strict';
// let fs = require('fs');
// fs.readFile('./output.txt','utf-8',(error,data) => {
//    if(error){
//       console.log('文件读取失败');
//    }else{
//       console.log(`文件读取成功，内容为${data}`)
//    }
// });

// fs.writeFile('./output.txt','sth wrong!!',error => {
//    if(error){
//       console.log('文件写入失败');
//    }else{
//       console.log('文件写入成功');
//    }
// })

// // 引入http模块
// let http = require('http');
// // 创建服务器对象
// let server = http.createServer();
// // 注册request请求时间
// server.on('request', (request, response) => {
// 	console.log(`收到客户端请求,请求路径为： ${request.url}`);
// 	// 可以通过调用response.write来给客户端写入返回数据，write可以使用多次，但最后一定要通过调用response.end来结束写如，否则服务器会一直等待;
// 	// response.write('请求相应');
// 	// response.write('没数据');
// 	// response.end();

// 	// response.write('<head><meta charset="utf-8"/></head>')
// 	// 响应内容只能是二进制数据或者字符串
// 	// 服务端默认发送的数据时utf8,但是浏览器在不知道服务器响应内容编码的情况下会按照操作系统的默认编码区解析数据（中文操作系统默认gbk）
// 	if (request.url === '/plain') {
// 		response.writeHead(200, { 'Content-type': 'text/plain;charset=utf-8' });
// 		response.end('<h3>普通文本</h3>', error => {
// 			console.log('服务器已返回数据')
// 		});
// 	} else if (request.url === '/html') {
// 		response.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
// 		response.end('<h3>Html标签</h3>', error => {
// 			console.log('服务器已返回数据')
// 		});
// 	}

// });
// // 绑定端口号，启动服务器
// server.listen(80, _ => {
// 	console.log('服务器已启动，可通过 http://localhost 访问');
// });

// let os = require('os');
// console.log(os.cpus());
// console.log(os.totalmem() / 1024 / 1024 / 1024);


// // 引入http模块
// let http = require('http');
// let fs = require('fs');
// // 创建服务器对象
// let server = http.createServer();
// // 注册request请求时间
// server.on('request', (request, response) => {
// 	console.log(`收到客户端请求,请求路径为： ${request.url}`);
// 	// 可以通过调用response.write来给客户端写入返回数据，write可以使用多次，但最后一定要通过调用response.end来结束写如，否则服务器会一直等待;
// 	// response.write('请求相应');
// 	// response.write('没数据');
// 	// response.end();

// 	// response.write('<head><meta charset="utf-8"/></head>')
// 	// 响应内容只能是二进制数据或者字符串
// 	// 服务端默认发送的数据时utf8,但是浏览器在不知道服务器响应内容编码的情况下会按照操作系统的默认编码区解析数据（中文操作系统默认gbk）
// 	if (request.url === '/plain') {
// 		response.writeHead(200, { 'Content-type': 'text/plain;charset=utf-8' });
// 		response.end('<h3>普通文本</h3>', error => {
// 			console.log('服务器已返回数据')
// 		});
// 	} else {
// 		fs.readFile(`.${request.url}`,(error,data) => {
// 			if(!error){
// 				response.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
// 				response.end(data, error => {
// 					console.log('服务器已返回数据')
// 				});
// 			}
// 		});
		
// 	}

// });
// // 绑定端口号，启动服务器
// server.listen(80, _ => {
// 	console.log('服务器已启动，可通过 http://localhost 访问');
// });

// let fs = require('fs');

// fs.readdir('./',(err, files) => {
// 	if(!err){
// 		console.log(files)
// 	}
// });

let http = require('http');
let fs = require('fs');
let tpl = require('art-template');


let server = http.createServer();

server.on('request',(req,res) => {
	let url = req.url;
	if(url === '/index.html'){
		fs.readFile(`./resource/${url}`,(err,data) => {
			if(!err){
				fs.readdir('./',(err,files) => {
					if(!err){
						res.writeHead(200,{'content-type': 'text/html;charset=utf8'});
						let rs = tpl.render(data.toString(),{
							name: '光头',
							hobbies: files
						});
						res.end(rs);
					}
				});
				
			}
		})
	}else{
		
	}
});

server.listen(80,_ => {
	console.log('server is runing on http://localhost/');
});