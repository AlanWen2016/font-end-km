// 1. 实现new绑定

// 1.1 new的使用

function Person(name) {
    this.name = name
}

var p1 = new Person('Tim')
console.log('Person name is ' + p1.name)

var p2 = new Person('Tom')
console.log('Person name is ' + p2.name)

// 四件事情：
// 创建一个新对象
// 新对象的__proto属性指向构造器函数的原型方法
// 函数构造器方法调用
// 返回该对象

function _new() {
    let obj = {}
    let constructor = [].shift.call(arguments)
    obj.__proto__ = constructor.protype
    let result = constructor.apply(obj, arguments)
    return typeof result === 'object' ? result : obj
}

function rNew(constructor, ...arg ){
    let obj = Object.create(constructor.prototype)
    let result = constructor.apply(obj, arg)
    console.log(constructor)
    return typeof result === 'object' ? result : obj

}

function newR() {
    let obj = 
}



var p3 = rNew(Person, 'Tony')

console.log('Person name is ' + p3.name)
