let obj = {a: {b: 2}, k: undefined, c: null, f: /^\d/, d: new Date()}

var obj2 = deepClone(obj)

// obj2.a = {c: 222}

// console.log(obj)

function deepClone(obj) {
    if(typeof obj !== 'object') return obj
    var _obj = Array.isArray(obj) ? [] : {}
    let type = Object.prototype.toString.call(obj)
    if(type === '[object Date]') return new Date(obj)
    if(type === '[object RegExp]') return new RegExp(obj)

    for(key in obj){
        if(obj[key] === obj) continue
        if(obj.hasOwnProperty(key)){
            if(obj[key] && typeof obj[key]=== 'object'){
                _obj[key] = deepClone(obj[key])
            }else{
                _obj[key] = obj[key]
            }
        }
    }
    return _obj
}

console.log(obj2)