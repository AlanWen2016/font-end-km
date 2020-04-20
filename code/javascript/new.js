function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
    // 将 arguments 对象转为数组
    var args = [].slice.call(arguments);
    // 取出构造函数
    var constructor = args.shift();
    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(constructor.prototype);
    // 执行构造函数
    var result = constructor.apply(context, args);
    // 如果返回结果是对象，就直接返回，否则返回 context 对象
    return (typeof result === 'object' && result != null) ? result : context;
  }
  
  // 实现2
  function realizeNew(){
      // 创建一个新对象
      var obj = {};
      // 获取构造函数
      var Con = [].shift.call(arguments);
      // 将新生对象的原型指向构造函数的原型
      obj.__proto__ = Con.prototype;
      // 将this绑定绑定为当前对象
      let result = Con.apply(obj, arguments);
      // 返回new出来的对象
      return typeof result === "object" ? result : obj
  
  }
  
  function Person (name,age){
      this.name = name;
      this.age = age;
      this.say = function () {
          console.log("I am " + this.name)
      }
  }
   
  //通过new创建构造实例
  // 实例
  var actor1 = _new(Person, '张三', 28);
  var actor2 = realizeNew(Person, '张思', 18)
  console.log(actor1)
  console.log(actor2)
  console.log(actor1.__proto__ === actor2.__proto__); // true


  function f(){
    console.log(new.target === f);
    if (!new.target) {
        throw new Error('请使用 new 命令调用！');
      }
}
f();
new f();