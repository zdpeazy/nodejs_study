/**
 * Created by HP on 2017/2/6.
 */
/*var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico") {  //清除第2此访问
        console.log('访问');
        response.write('hello world');
        response.end('访问结束');
    }
}).listen(8000);
console.log('Server running at http://192.168.1.158');*/
// 第二节
/*var http = require('http');
var otherfun = require('./otherfuns.js');
http.createServer(function(request, response){
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico") {  //清除第2此访问
       /!* otherfun.fun2(response);
        otherfun.fun3(response);
        otherfun.fun4(response);*!/
       //用字符串调用对应的函数
        otherfun['fun2'](response);
        response.end('访问结束');
    }
}).listen(8000);
console.log('Server running at http://192.168.1.158');
function fun1(res){
    res.write('hello,我是fun1');
}*/
// 第三节
var http = require('http');
var User = require('./user.js');
http.createServer(function(request, response){
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!== "/favicon.ico") {  //清除第2此访问
        //实例化对象
        var user = new User();
        user.id = 1;
        user.name = '张三';
        user.age = 20;
        user.enter();
        response.end('');
    }
}).listen(8000);
console.log('Server running at http://192.168.1.158');