/**
 * Created by HP on 2017/2/6.
 */
function user(id,name,age){
    this.id;
    this.name;
    this.age;
    this.enter = function(){
        console.log(this.name + '进入图书馆');
    }
}
module.exports = user;