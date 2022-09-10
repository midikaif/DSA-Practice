function repeatedElement(arr, find) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if ((arr[mid] === find && arr[mid + 1] === find) || (arr[mid] === find && arr[mid - 1] === find)) {
            return true;
        }

        if (arr[mid] > find) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return false;
}

// console.log(repeatedElement([1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9, 10, 11, 13], 13))

// ------------------------------------------------------------------------------
// function uniqueElement(arr) {
//     // Time: O(logn) Space: O(1)
//     let lo = 0, hi = arr.length - 1;
//     while (lo <= hi) {
//         let mid = lo + Math.floor((hi - lo) / 2);
//         if (mid - 1 >= 0 && mid + 1 < arr.length && arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) {
//             // we are on the unique element
//             return arr[mid];
//         }
//         if (mid == 0 && mid + 1 < arr.length && arr[mid] != arr[mid + 1]) {
//             return arr[mid]; // [1,2,2,3,3,4,4]
//         }
//         if (mid == arr.length - 1 && mid - 1 >= 0 && arr[mid] != arr[mid - 1]) {
//             return arr[mid]; // [1,1,2,2,3,3,4]
//         }
//         if ((mid + 1 < arr.length && arr[mid] == arr[mid + 1] && mid % 2 == 0) ||
//             (mid - 1 >= 0 && arr[mid - 1] == arr[mid] && (mid - 1) % 2 == 0)) {
//             // we are on the left of unique element
//             lo = mid + 1;
//         } else {
//             // we are on right of unique element
//             hi = mid - 1;
//         }
//     }
//     return undefined;
// }
// ************************************************************

// --------------------------------------------------------------------------------------

//                                  ***IMPORTANT***

// --------------------------------------------------------------------------------------
function uniqueElem(arr) {
    let start = 0, end = arr.length - 1;
    while (start<=end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) {
            return arr[mid];
        }

        if ((mid %2 == 0 && arr[mid] == arr[mid + 1]) || (mid%2!= 0 && arr[mid] == arr[mid-1])) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return undefined
}

// console.log(uniqueElem([1, 1, 2, 2, 3, 3, 4]));
// console.log(uniqueElem( [1,1,-1,-1,3,3,99,13,13,6,6] ));

// --------------------------------------------------------------------------------------


/**
 *
 *  Problem 3
Given an array of length n, where elements are sorted,
all the elements are unique but one element is present
twice, and the elements lie in the range [0,n-2]. Find the
repeating element.

Example: [0,1,2,3,3,4,5,6,7,8] → ans is 3

*/


function presentTwice(arr) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] == arr[mid + 1] || arr[mid] == arr[mid - 1]) {
            return arr[mid];
        }

        if (arr[mid] == mid) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return undefined;
}

// console.log(presentTwice([0,1,2,3,3,4,5,6,7,8]));