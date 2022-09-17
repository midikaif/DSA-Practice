/*
                        *** Problem ***
Given an array of integers, of length n , modify the array such that all the negative
numbers are shifted to the last.

Example: [-1,2,3,-5,6] → [2,3,6,-5,-1]
*/

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function shiftingNegative(arr) {
    let j = arr.length - 1;
    for (let i = 0; i !== j; i++) {
        if (arr[i] < 0) {
            if (!(arr[j] < 0)) {
                swap(arr, i, j);
                j--;
            }
            else {
                j--;
            }
        }
    }
}

shiftingNegative([-1, 2, 3, -5, 6])

function shiftToLast(arr) {
    /**
    * Time: O(n)
    * Space: O(1)
    */
    let i = 0;
    let k = 0;
    let j = arr.length - 1;
    while (k <= j) {
        if (arr[k] < 0) {
    // if element is negative we swap it with the element at j, and negative secti
    // on increases
            swap(arr, k, j);
            j--;
        } else {
            // if element is positive we just move ahead with i, and positive section incr
            // eases
            // i++;
            k++;
        }
    }
    return arr;
}

// console.log(shiftToLast([-1, 2, 3, -5, 6]));
