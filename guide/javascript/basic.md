
# 变量和类型

```js
 function Person(name, age, salary){
     this.name = name;
     this.age = age;
     this.salary = salary;
 }

 function f1(person){
     person.name = "ls";
     person = new Person("aa", 10, 10);
    
 }
 var p = new Person("sz", 19, 1000);

 console.log(p.name);
 f1(p);
 console.log(p.name);


```


## this绑定

::: tips
一句话概括this绑定：this指向是在调用函数时根据执行上下动态确定的
:::

### 五种this绑定


