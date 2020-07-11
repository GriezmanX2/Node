'uss strict';

let http = require('http');
let fs = require('fs');
let url = require('url');
let template = require('art-template');
let moment = require('moment');
let dataList = [{
    name: '王五',
    comment: '姚明打进NBA啦'
}];
http.createServer((req,res) => {
    let pathname = url.parse(req.url).pathname;
    let params = url.parse(req.url,true).query;
    if(pathname === '/list'){
        fs.readFile('./views/list.html',(err,data) => {
            if(err){
                console.log('404');
            }else{
                res.writeHead(200,{'content-type': 'text/html;chartset=utf8'});

                res.end(template.render(data.toString(),{
                    dataList: dataList
                }));
            }
        })
    }else if(pathname === '/post'){
        fs.readFile('./views/post.html',(err,data) => {
            if(err){
                console.log('404');
            }else{
                res.writeHead(200,{'content-type': 'text/html;charset=utf8'})
                res.end(data.toString());
            }
        });
    }else if(pathname === '/submit'){
        let record = params;
        record.datetime = moment().format('YYYY-MM-DD HH:mm:ss');
        dataList.push(record);
        res.writeHead(302,{'location': '/list'});
        res.end();
    }else if(pathname.indexOf('/public/') === 0){
        fs.readFile(`.${pathname}`,(err,data) => {
            res.end(data);
        });
    }else{
        res.end('404');
    }
}).listen(11520,_ => {
    console.log('Server is running at http://localhost:11520/');
});