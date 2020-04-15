// 1. 
// let nums = [2, 7, 11, 15];
// let target = 9;


function twoSum(nums, target) {
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
        if(map.get(target - nums[index]) !== undefined) {
            return [index, map.get(target - nums[index])]
        }
        map.set(nums[index], index)
    }
}
// console.log(twoSum(nums, target)

// 2. 合并两个有序数组

let nums1 = [1,2,3,0,0,0], m = 3
let nums2 = [2,5,6],       n = 3
// 输出: [1,2,2,3,5,6]

// 双指针法
function mergeArray(nums1, m, nums2, n){
    let i = m -1;
    let j = n -1;
    let k = m + n -1;

    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            k--;
            i--;
        }else{
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }

    while(j>=0) {
        nums1[k] = nums2[j]  
        k-- 
        j--
    }
    return nums1;
}

// console.log(mergeArray(nums1, m, nums2, n));

// 1. 冒泡排序

function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }   
    }
    return arr;
}

let  bArray = [12, 22, 2,4, 6, 1,45, 56];

console.log(bubbleSort(bArray))