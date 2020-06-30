// 栈是一个先进后出（last in first out）的有序集合。新添加的元素或者带删除的元素放在栈顶。在栈里，新入栈的元素靠近栈顶，早入栈元素靠近栈底。

function Stack() {
    let items = []

    this.push = function(element) {
        items.push(element)
    }

    this.pop = function() {
        return items.pop()
    }
    this.peek = function() { // 返回栈顶元素
        return items[items.length -1]
    }

    this.isEmpty = function() {
        return items.length === 0
    }

    this.clear = function() {
        return items = []
    }

    this.size = function() {
        return items.length
    }
}

// 1. 十进制转二进制

var stack = new Stack()

function divedeBy2(num){
    var remStack = new Stack()
    var rem;
    var binnaryString = '';

    while(num > 0){
        rem = Math.floor(num % 2)
        remStack.push(rem)
        num = Math.floor(num/2)
    }

    console.log(remStack.peek())
    while(!remStack.isEmpty()){
        binnaryString += remStack.pop().toString();
    }

    return binnaryString
}

console.log(divedeBy2(10))

var isValid = function(s) {
    let items = [];
    let len = s.length

    if(len % 2 !== 0) return false
    for(let i= 0; i < len; i ++){
        let letter = items[items.length-1]
        switch(s[i]){
            case '(':
            items.push('(');
            break;
             case '[':
            items.push('[');
            break;
             case '{':
            items.push('{');
            break;
             case ')':
             if(letter=== '('){
                 items.pop();
             }
            break;
            case ']':
             if( letter=== '['){
                 items.pop();
             }
            break;
             case '}':
             if(letter === '{'){
                 items.pop();
             }
            break;
        }
    }
    return items.length === 0
};


console.log(isValid('()'))