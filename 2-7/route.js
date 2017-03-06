/**
 * Created by HP on 2017/2/7.
 */
 var http = require('http');
 var url = require('url');
 var router = require('./router_fun.js');
 http.createServer(function(request, response){
   response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
   if(request.url!=='/favicon.ico'){
      var pathname = url.parse(request.url).pathname;
      //console.log(pathname);
      pathname = pathname.replace(/\//, '')
      //console.log(pathname);
      router[pathname](request, response);
      response.end('');
   }
 }).listen(8000);
 console.log('Server running at http://http://192.168.1.158/;')
