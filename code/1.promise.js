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
  
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTY5NDg5NDc0LCJleHAiOjE1Njk0ODk0OTR9.Knyz2k-o2Yz4CaEaPUvbVfHfMrvtnWGCsF3Hg1--4nc
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTY5NDg5NDY5LCJleHAiOjE1Njk0ODk0ODl9.Yx5WYYW1iLJbBFUp6EZBB4hj5rtwrQrqHD6jGktX9-s