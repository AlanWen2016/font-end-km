// reduce方法对数组中对每个元素执行一个有您提供对自定义reducer函数，将其结果汇总为单个返回值
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
    return arr.reduce(
      (promiseChain, currentFunction) => {
          console.log('promiseChain', promiseChain)
          return promiseChain.then(currentFunction)
        },
      Promise.resolve(input)
    );
  }
  
  // promise function 1
  function p1(a) {
    return new Promise((resolve, reject) => {
        console.log('running p1')
      resolve(a * 5);
    });
  }
  
  // promise function 2
  function p2(a) {
    return new Promise((resolve, reject) => {
       setTimeout(()=>console.log('running p2'), 2000) 
      resolve(a * 2);
    });
  }
  
  // function 3  - will be wrapped in a resolved promise by .then()
  function f3(a) {
    console.log('running p3')      
   return a * 3;
  }
  
  // promise function 4
  function p4(a) {
    return new Promise((resolve, reject) => {
        console.log('running p4')
      resolve(a * 4);
    });
  }
  
  const promiseArr = [p1, p2, f3, p4];
  runPromiseInSequence(promiseArr, 10)
    .then(console.log);   // 1200



    let test = Promise.resolve(()=>{
        console.log('p1')
        Promise.resolve(()=>{
            console.log('p2')
            Promise.resolve(()=>{
                console.log('p3')
            })
        })
    })


    let ret = (new Promise((resolve, reject)=>{
        console.log(13);
        resolve('p1')
    }).then((data)=>{
        setTimeout(()=>{
        console.log(data)            
        }, 2000)
    })).then(()=>{
        console.log('p2')
    })

    new Promise((resolve, reject) => {
        // Promise #1
      
        resolve();
      })
        .then(result => {
          // Promise #2
      
          return result;
        })
        .then(result => {
          // Promise #3
      
          return result;
        });




        

[1,3,4].reduce1(function(acc, curr){
    return acc + curr
})


Array.prototype.reduce1 =  function(func, initialValue) {
    var arr = this
    var base = typeof initialValue === 'undefined' ? arr[0] : initialValue
    var startPoint = typeof initialValue === 'undefined' ? 1 : 0
    arr.slice(startPoint)
        .forEach(function(val, index) {
            // 执行引入函数，并将结果返回
            base = func(base, val, index + startPoint, arr)
        })
    return base
}

