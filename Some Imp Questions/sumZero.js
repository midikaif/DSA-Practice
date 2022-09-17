/*
            *** Problem 3 ***
Given an array of integers, check if there is any subarray with sum of it’s elements as
0 

Example:

[1,2,-1,2,-3] → Yes , Because we have a subarray [2,-1,2,-3] where sum is 2 + (-1)
+ 2 + (-3) which evaluates to 0

[2,0,3,-3] → Yes, Because we have a subarray [0] which id having a sum zero, lso
there is one more subarray [3,-3] whose sum is also 0

[1,0,-1,5] → Yes, Because we have a subarray [1, 0, -1] which is having the sum 0

[1,2,3,4,5] → No, there is no subarray that sums up to 0

*/


// [1,2,3] => [1], [1,2], [2], [2,3], [3], [1,2,3]

function subArray(arr) {
    let subArrays = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            subArrays.push(arr.slice(i, j + 1));
        }
    }
    console.log(...subArrays);
}

function subArraySumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === 0) return true;
        }
    }
    return false;
}

// console.log(subArraySumZero([5, 2, 1, -3]));

// [5,2,1,-3] => [5,7,8,5]

//       -------------------------
//         *** Efficient Way ***
// ------------------------------------------

function subArraySumZeroEfficient(arr) {
    let map = {};
    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i - 1];
    }

    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        }
        else {
            map[arr[i]] += 1;
        }
    }

    for (let value of Object.values(map)) {
        if (value > 1) return true;
    }
    return false;
}

// console.log(subArraySumZeroEfficient([5, 2, 1, 3]));
