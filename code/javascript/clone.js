function createData(deepth, breadth){
    var data = {}
    var tmp = data
    for(i=0; i<deepth; i++ ){
        tmp = tmp['data'] = {}
        for(j=0; j<breadth; j ++){
            tmp[j] = j
        }
    }
    return data
}

function _clone(obj) {
    if(typeof obj !== 'object') return obj
    let objClone = Array.isArray(obj)?[]:{};
    let type = Object.prototype.toString.call(obj)
    if(type === '[object Date]'){
        return new Date(obj)
    }
    if(type === "[object RegExp]"){
        return new RegExp(obj)
    }

    for(key in obj){
        let prop = obj[key]
        if(prop === obj) {// 
            // 在这里决定是否保留引用
            objClone[key] = prop
            continue
        }
        if(obj[key] && typeof obj[key] === 'object'){
            objClone[key] = _clone(obj[key])
        }else{
            objClone[key] = obj[key]
        }
    }
    return objClone
}



function cloneLoop(x) {
    const root = {};

    // 栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x,
        }
    ];

    while(loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }

        for(let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k],
                    });
                } else {
                    res[k] = data[k];
                }
            }
            console.log(loopList,'loopList')
        }
    }

    return root;
}




let c = {d: 2}
let a = {b: c}
// let abj = {a: a, k: undefined, c: null}
let abj = {a: {b: 2}, k: undefined, c: null, f: /^\d/, dd: new Date()}
abj.cc = abj
let bbj = _clone(abj)

console.log(bbj)

