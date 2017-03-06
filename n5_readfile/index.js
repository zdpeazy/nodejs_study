/**
 * Created by HP on 2017/2/7.
 */
 var http = require('http');
 var optfile = require('./optfile.js');
 http.createServer(function(request, response){
   response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
   if(request.url!=='/favicon.ico'){
     response.write('hello,world');
     optfile.readfileSync("G:\\www\\nodejs\\one\\models\\aa.txt");
     
   }
 }).listen(8000);
 console.log('Server running at http://http://192.168.1.158/;')
