let a = {},
b = '0',
c = 0;
a[b] = '张三'
a[c] = '李四'
console.log(a[b])


var test = (function(i){
  return function() {
      console.log(i*= 2)
  }
})()

test(5)

function A(a){
    A =  function(){
        alert(a + b ++)
    }
    alert(a++)
}

A(1)
A(2)