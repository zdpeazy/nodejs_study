module.exports = {
  login: function(req,res){
    res.write('我是login方法');
  },
  log: function(req,res){
    res.write('我是log方法');
  },
  info: function(req,res){
    res.write('please write your name');
  }

}
