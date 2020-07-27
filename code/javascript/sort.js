let  bArray = [12, 22, 2,4, 6, 1,45, 56, 57];

function bubbleSort(arr) {
    for(let i= 0; i< arr.length-1; i++){
        for(let j=i+1; j< arr.length; j ++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

console.log(bubbleSort(bArray))