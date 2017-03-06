/**
 * Created by HP on 2017/2/6.
 */
/*
function fun2(res) {
    console.log('fun2')
    res.write('hello 我是fun2')
}
module.exports = fun2;*/

//支持多个函数
module.exports = {
    fun2: function (res) {
        console.log('fun2');
        res.write('hello 我是fun2');
    },
    fun3: function (res) {
        console.log('fun3');
        res.write('hello 我是fun3');
    },
    fun4: aa
}
function aa(res){
    console.log('fun4');
    res.write('hello 我是fun4')
}