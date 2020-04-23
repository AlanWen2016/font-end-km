// 1. 
// let nums = [2, 7, 11, 15];
// let target = 9;


function twoSum(nums, target) {
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
        if (map.get(target - nums[index]) !== undefined) {
            return [index, map.get(target - nums[index])]
        }
        map.set(nums[index], index)
    }
}
// console.log(twoSum(nums, target)

// 2. 合并两个有序数组

let nums1 = [1, 2, 3, 0, 0, 0],
    m = 3
let nums2 = [2, 5, 6],
    n = 3
// 输出: [1,2,2,3,5,6]

// 双指针法
function mergeArray(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            k--;
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }

    while (j >= 0) {
        nums1[k] = nums2[j]
        k--
        j--
    }
    return nums1;
}

// console.log(mergeArray(nums1, m, nums2, n));

// 1. 冒泡排序

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

let bArray = [1, 12, 22, 3, 2, 4, 6, 1, 45, 56];

// console.log(bubbleSort(bArray))

// 楼梯算法问题
function f(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return f(n - 1) + f(n - 2)
}

// console.log(f(5))

function insertSort(array) {
    let j;
    for (let i = 1; i < array.length; i++) {
        j = i;
        tmp = array[i];
        // 比较当前值和一排序数组到每个元素，寻找arr[i]需要到的位置。
        while (j > 0 && array[j - 1] > tmp) { // 
            array[j] = array[j - 1];
            j--;
        }
        array[j] = tmp;
    }
    return array;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let sIndex = i;
        let j = i;
        for (j; j < arr.length; j++) {
            if (arr[sIndex] > arr[j]) {
                sIndex = j;
            }
        }
        if (sIndex !== i) {
            let tmp = arr[sIndex];
            arr[sIndex] = arr[i];
            arr[i] = tmp;
        }
    }
    return arr;
}
// console.log(selectionSort([3,3,1,1,2,34, 6]))


//
function bSearch(arr, target){
    var left = 0;
    var right = arr.length -1;
    while(left <= right){
        var mid = left + ((right - left) >>> 1);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] > target){
            right = mid -1
        }else{
            left = mid +1
        }
    }
    return -1;
}




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var left = 0;
    var right = nums.length -1;
    var leftIndex = -1;
    var rightIndex = -1;
    while(left <= right){
        var mid = left + ((right -left)>>>1);
        if(nums[mid] > target){
            right = mid -1;
        }else if(nums[mid] < target){
            left = mid +1;
        }else{
            if(mid === 0 || (nums[mid -1] != target)){
                console.log(mid, nums[mid], target)
                leftIndex = mid;
                break;
            }else{
                right = mid -1;
            }
        }
    }

    
    left = 0; 
    right = nums.length -1;
    while(left<=right){
            var mid = left + ((right - left)>>>1);
            if(nums[mid]> target){
                right = mid -1;
            }else if(nums[mid]< target){
                left = mid + 1;
            }else{
                if ((mid == n - 1) || (nums[mid + 1] != target)) {
                    rightIndex = mid;
                    break;
                }else{
                    left = mid + 1;
                }
            }
        }

    return [leftIndex, rightIndex];
};


function search(arr, target){
   let left = 0;
   let right = arr.length -1;
   while(left <= right){
       let mid = left + ((right -left)>>>1);
       if(arr[mid] > target){
           right = mid -1;
       }else if(arr[mid] > target){
           left = mid +1;
       }else{
           if(mid === 0 || (arr[mid -1] != target)){
               return mid
           }else{
               right = mid -1;
           }
       }
   }
   return -1;
}
console.log(searchRange([5,7,7,8,8,10],8))