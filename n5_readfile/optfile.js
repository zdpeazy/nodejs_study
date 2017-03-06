var fs = require('fs');
module.exports={
  readfile: function(path){//异步执行
    fs.readfile(path, function(){
      if(err){
        console.log(err);
      }else{
        console.log(data.toString());
      }
    });
    console.log('异步方法执行完毕');
  }
  readfileSync: function(path){//同步执行
    var data = readfileSync(path, 'utf-8');
    console.log('同步方法执行完毕');
    return data;
  }
}
