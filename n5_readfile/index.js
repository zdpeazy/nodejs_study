/**
 * Created by HP on 2017/2/7.
 */
 var http = require('http');
 var optfile = require('./optfile.js');
 http.createServer(function(request, response){
   response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
   if(request.url!=='/favicon.ico'){
     console.log('访问');
     response.write('hello,world');
     //optfile.readfileSync("G:\\www\\1.txt");
     optfile.readfile("G:\\www\\1.txt");
     response.end('');
   }
 }).listen(8000);
 
 console.log('Server running at http://http://192.168.1.158/;')
