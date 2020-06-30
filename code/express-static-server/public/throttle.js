// 节流防抖
// 防抖函数
// 

function debounce(fn, delay = 1000, immediate = false) {
    let timer = null;
    return function(...arg){
        if(timer) clearTimeout(timer)
        if(immediate && !timer) {
            fn.apply(this, arg)   
            immediate = false
            return
        }
        timer = setTimeout(()=>{
            fn.apply(this, arg)   
        }, delay)
    }
}

function showScrollTop(code = '') {
    console.log(document.querySelector('.parent').scrollTop,code)
}
// function debounce(fn, delay = 500) {
//     let timeout = null;
//     return function() {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         fn.apply(this, arguments);
//       }, delay)
//     }
//   }
const debounceFn = debounce(showScrollTop, 1000, true)
document.querySelector('.parent').addEventListener("scroll",function(){
    debounceFn('aaa')
})


function debounce2(fn, delay) {
  let timer = null
  if(timer) clearTimeout(timer)
  return function (...arg){
      timer =setTimeout(()=>{
        fn.apply(this, arg)
      })
  }
}

function throttle(fn, delay) {
    let prev = 0
    return function(...arg) {
        let current = +new Date()
        if(current - prev > delay){
            prev = current
            return fn.apply(this, arg)
        }

    }
}