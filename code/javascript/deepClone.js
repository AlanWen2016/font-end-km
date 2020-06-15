let obj1 = {
    a: {e: 12},
    b: undefined,
    c: new Date(),
    d: /^\d/,
    f: 1234
}


// 使用for循环
let obj2 = {}
for(key in obj1){
    obj2[key] = obj1[key] 
}

// es6解构赋值
let obj3 = {...obj2}
obj2.a.e = 4
obj2.f = 3
console.log(obj1, obj2, obj3)
let obj4 = Object.assign({}, obj1);
var obj5 = Object.create(obj1);

// 数据浅拷贝
var a = [1,2,3,4];
var b = a.slice();
b[0] = 2;
alert(a); // 1,2,3,4
alert(b); // 2,2,3,4

// 修改obj第一层数据，如果




let abj = {a: {b: 2}, k: undefined, c: null, f: /^\d/}



function deepClone (obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(typeof obj !== "object") return obj
    let type = Object.prototype.toString.call(obj);
    if(type === "[object Date]"){
        return new Date(obj)
    }
    if(type === "[object RegExp]"){
        return new RegExp(obj)
    }
    for(key in obj){
        let prop = obj[key];        // 避免相互引用对象导致死循环，如obj.a = obj的情况
        if(prop === obj) {            
            continue;
        }     
        if(obj.hasOwnProperty(key)){
            if(obj[key]&&typeof obj[key] ==="object"){
                objClone[key] = deepClone(obj[key]);
              }else{
                //如果不是，简单复制
                objClone[key] = obj[key];
              }
        }
    }
    return objClone
}

let bbj = deepClone(abj)
bbj.a = {c: 26}
console.log(bbj, bbj === abj, abj)
