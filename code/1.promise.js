//	Node.js	范例
let fs = require("fs");

function readFile(filename) {
    return new Promise(function (resolve, reject) {
        //	触发异步操作								
        fs.readFile(filename, {
            encoding: "utf8"
        }, function (err, contents) {
            //	检查错误												
            if (err) {
                reject(err);
                return;
            }
            //	读取成功												
            resolve(contents);
        });
    });
}
let promise = readFile("example.txt");
//	同时监听完成与拒绝 
promise.then(function(contents)
{
    //	完成				
    console.log(contents);
},
function (err) {
    //	拒绝				
    console.error(err.message);
});



let a = {}
let	p =	new	Promise(((resolve,reject) => {
    console.log('Promise');
    a = {
        resolve,
        reject
    }
  }));
  p.then((a) => {
    console.log('Resolved.',a);
  });
  console.log(a.resolve(234));



function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(Object.prototype.toString.call(A) === '[object Array]'){
        A.sort(function(a, b){
            return a-b
        })
    }
    var result = 1;
    for(var i =0; i< A.lenght; i++){
        if(A[i] > 0){
            result = A[i] + 1;
            if(result < A[i+1]){
                return result
            }
        }
    }
    console.log(result)
}


let ret = solution([6,1,3,6])
console.log(ret)