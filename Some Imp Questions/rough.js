
// /===========================================/

// function triplet1(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++){
//             for (let k = j + 1; k < arr.length; k++){
//                 if (arr[i] + arr[j] + arr[k] === 0) {
//                     console.log(arr[i], arr[j], arr[k]);
//                     count++
//                 }
//             }
//         }
//     }
//     console.log(count);
// }

// // triplet1([-1, 0, 1, 2, -1, -4])



// function triplet2(arr) {
//     let count = 0;
//     // arr.sort((a,b) => a-b)
//     let i = 0, j = 1;
//     while (i < arr.length-2) {
//         let y = arr[i] + arr[j];
//         for (j += 1; j < arr.length; j++) {
//             if (arr[j] === -y) {
//                 // console.log(arr[i], arr[j], arr[k]);
//                 count++;
//             }
//         }
//         i++;
//         j = i+1;
//     }
//     console.log(count);
// }


// // triplet2([-1, 0, 1, 2, -1, -4])

// function binarySearch(arr, left, right, target) {
//     while (left <= right) {
//         let mid = left + Math.floor((right - left) / 2);
//         if (arr[mid] === target) {
//             return true;
//         }
//         if (arr[mid] < target) {
//             left = mid+1;
//         }
//         else {
//             right = mid-1;
//         }
//     }
//     return false;
// }
// // [-4, -1, -1, 0, 1, 2]
// // let arr = [2]
// // console.log(binarySearch(arr, 0, arr.length-1, -1));

// function triplet3(arr) {
//     let count = 0;
//     arr.sort((a,b) => a-b)
//     let i = 0, j = 1;
//     while (i < arr.length-2) {
//         let y = arr[i] + arr[j];
//         if (binarySearch(arr, j + 1, arr.length - 1, -y)) {
//             count++
//         }
//         i++;
//         j = i+1;
//     }
//     console.log(count);
// }


// // triplet3([-1, 0, 1, 2, -1, -4])
// function binarySearch3(arr, left, right, target) {
//     while (left <= right) {
//         let mid = left + Math.floor((right - left) / 3);
//         if (arr[mid] === target) {
//             return true;
//         }
//         if (arr[mid] < target) {
//             left = mid+1;
//         }
//         else {
//             right = mid-1;
//         }
//     }
//     return false;
// }

// // binarySearch3([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 9, 8)
// /*
//     1. mid = (9-0)/3 = 3+0 = 3
//        arr[mid] => 4 != 8
//        left = 3+1 = 4
// */




// let f = [1, 3, 2, 4]
// let s = [1, 3, 2, 4]

// function goodPairs(arr1,arr2) {
//     let count = 0;
//     let i = 0, j = 1;
//     while (i != arr1.length-1) {
//         if (arr1[i] + arr1[j] > arr2[i] + arr2[j]) {
//             count++;
//             j++;
//         }
//         else j++;
//         if (j >= arr1.length) {
//             i++;
//             j = i + 1;
//         }

//     }




//     // for (let i = 0; i < arr1.length; i++){
//     //     for (let j = i + 1; j < arr1.length; j++){
//     //         if (arr1[i] + arr1[j] > arr2[i] + arr2[j]) {
//     //             count++;
//     //         }
//     //     }
//     // }
//     console.log(count);
// }

// // goodPairs(f, s);

// // ****************************************************

// // function upperbound(arr, start, find) {

// //     let last = arr.length - 1;

// //     let mid = start + Math.floor((last - start) / 2);

// //     while (start <= last) {

// //         if(arr[mid]>find && arr[mid-1] == )

// //     }

// // }

// // *********************************************************


// function triPairs(arr) {

//     let count = 0;

//     for (let i = 0; i < arr.length; i++){

//         for (let j = i + 1; j < arr.length; j++){

//             for (let k = j + 1; k < arr.length; k++){

//                 if ((arr[i] + arr[j] > arr[k]) && (arr[j] + arr[k] > arr[i]) && (arr[k] + arr

//                 [i] > arr[j])) {

//                 }

//                 else count++;

//             }

//         }

//     }

//     console.log(count);

// }

// // triPairs([5, 2, 9, 6]);




// function count(s) {

//     let arr = s.split(' ');

//     for (let i = arr.length - 1; i >= 0; i--){

//         if (arr[i].length > 0) {

//             return arr[i].length

//         }

//     }

//     //  return arr[arr.length-1].length;

// }

// // console.log(count("hello world"));
// // console.log(count("   fly me   to   the moon  "));











// function plusone(digits) {
//     let number = 0, mul = 1, n = digits.length-1;
//     for (let i = n; i >= 0; i--) {
//         let temp = digits[i] * mul;
//         number += temp;
//         mul *= 10;
//     }
//     number += 1;
//     let newDigits = [];
//     while (number != 0) {
//         newDigits.unshift(number % 10);
//         number = Math.floor(number / 10);
//     }
//     return newDigits;
// }

// // console.log(plusone([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));


// function plusone1(digits) {
//     let n = digits.length - 1;
//     for (let i = n; i >= 0; i--){
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits;
//         }
//         digits[i] = 0
//     }

//     let newDigits = new Array(n + 2).fill(0);
//     newDigits[0] = 1;
//     return newDigits;

// }

// // console.log(plusone1([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));


// function removeDup(nums) {
//     let map = {}, n = nums.length;
//     for(let i = 0; i<n; i++){
//         if(!map[nums[i]]){
//             map[nums[i]] = 1
//         }
//     }
//     for(let i = 0; i<Object.keys(map).length; i++){
//         nums[i] = Object.keys(map)[i]
//     }
//     return Object.keys(map).length;
// }

// console.log(removeDup([-1,0,0,0,0,3,3]));



/**
 *
 *  1-> 1
 *  2 -> 1+1, 2 => 2
 *  3 -> 1+1+1, 1+2, 2+1, 3 => 4
 *  4 -> 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2, 3+1, 1+3, 4 => 8 (n-1)+(n-2)
 *  5 ->
 *
 *
 *
 */

// function diceProb(n) {
//     if (n <= 0) {
//         return 1;
//     }
//     let ans = 0;
//     for (let i = 1; i <= 6; i++) {
//         if (n - i < 0) continue;
//         ans += diceProb(n - i);
//     }
//     return ans;
// }

// console.log(diceProb(3));
// console.log(diceProb(4));
// console.log(diceProb(5));
// console.log(diceProb(6));
// console.log(diceProb(7));







