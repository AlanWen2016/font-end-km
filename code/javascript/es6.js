function* gen(){
    console.log(1);
    yield 'Hello 1';
    yield 'Hello 2';
    yield 'Hello 3';
}
let interator = gen();

console.log(interator.next()); //{ value: 'Hello 1', done: false }
console.log(interator.next()); //{ value: 'Hello 2', done: false }
console.log(interator.next()); //{ value: 'Hello 3', done: false }
console.log(interator.next()); //{ value: undefined, done: true }



async function foo(){
    let ret1 = await Promise.resolve(1);
    console.log(ret1);
    let ret2 = await Promise.resolve(2);
    console.log(ret2);
}
// foo();

function interatorNext(value){
    let interator = this;
    let result = interator.next(value);
    if(result.done) return;
    let val = result.value;
    Promise.resolve(val).then((val)=>{
        interatorNext.call(interator, val);
    })
}
function yieldPromise(generator){
    let interator = generator();
    interatorNext.call(interator);
}



// test

yieldPromise(function* (){
    let ret1 = yield Promise.resolve(3);
    console.log(ret1);
    let ret2 = yield Promise.resolve(4);
    console.log(ret2);
})