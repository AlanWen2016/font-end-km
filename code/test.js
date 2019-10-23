function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    N = N.toString().split('');
    for (let index = 0; index < N.length; index++) {
    console.log(parseInt(N[index]) )
        if(parseInt(N[index]) >= 0 && N[index] < 5){
            N.splice(index, 0, 5)
            break;
        }
    }
    
    return N.join('')
}

console.log(solution(-999))