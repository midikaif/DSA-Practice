// *** *** *** Anagram *** *** *** 

function checkAnagram(str1, str2) {
    str1 = str1.split("").sort().join()
    str2 = str2.split("").sort().join()
    return str1 == str2;
}

function checkAnagramHash(str1, str2) {
    let map = {}
    for (let i = 0; i < str1.length; i++) {
        if (!map[str1[i]])
            map[str1[i]] = 1;
        else
            map[str1[i]] += 1;
    }

    for (let i = 0; i < str2.length; i++) {
        if (map[str2[i]]) map[str2[i]] -= 1;
        else return false;
        if (map[str2[i]] === 0) delete map[str2[i]];
    }

    return Object.keys(map).length === 0;
}

// console.log(checkAnagram('care', 'race'));

// -----------------------------------------------

/*
            *** Problem 1 ***
Given a string, print the frequency of each unique
character in the string.

Ex: RELEVEL
{R - 1, E - 3, L - 2, V - 1}

*/

function frequencyMap(arr) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        }
        else {
            map[arr[i]] += 1;
        }
    }
    return map;
}

// console.log(frequencyMap('relevel'));

// --------------------------------------------------

/*
            *** Problem 2 ***
Given a string of characters, find the first non-repeating
character in the string.

Ex: macbook → m
relevel → r
level → v
solutions → l
*/

function firstUnique(arr) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1
        }
        else {
            map[arr[i]] += 1
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] === 1) {
            return arr[i];
        }
    }
    return -1;
}

// console.log(firstUnique('macbook'));
// console.log(firstUnique('relevel'));
// console.log(firstUnique('level'));
// console.log(firstUnique('solutions'));

// ------------------------------------------

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

// ---------------------------------------------------------------------------------------
//                    <---------------------------------------->
// -----------------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------------
// RECURSION         RECURSION              RECURSION      RECURSION        RECURSION
//                    <---------------------------------------->
//       RECURSION            RECURSION               RECURSION       RECURSION
// -----------------------------------------------------------------------------------------


/*
                            *** *** Problem *** ***

    Your task is to count the number of ways to construct sum n by throwing a dice one or more times. Each throw produces an outcome between 1 and 6.

    For example, if n=3, there are 4 ways:
    
    1+1+1
    1+2
    2+1
    3
*/

function starRecursion(x, i, str) {
    if (i <= x) {
        if (x === i) return;
        str += '*';
        starRecursion(x, i + 1, str);
        console.log(str);
        
    }
}
// starRecursion(3, 0, '');

function subsetRecursion(arr, i, str) {
    if (arr.length === i) {
        console.log(str);
        return;
    }
    subsetRecursion(arr, i + 1, str + arr[i])
    subsetRecursion(arr, i + 1, str);
}

// subsetRecursion([1, 2, 3], 0, '');

// QUESTION - 1
/*
    GIVEN A VALUE N, HOW MANY BINARY STRINGS OF LENGTH N ARE THERE WITH NO CONSECUTIVE ONES

    EXAMPLE -> 
    N = 3;
    0 0 0
    0 0 1
    0 1 0
    1 0 0
    1 0 1

    N = 1;
    0
    1

    N = 2;
    0 0
    0 1
    1 0

*/ 

function binaryCount(n, str) {
    if (n === 1) {
        console.log(str)
        return;
    }
    if (n === 2) {
        console.log(str)
        return;
    }
        return binaryCount(n - 1, '') + binaryCount(n - 2, '0');
}

console.log(binaryCount(4, ''));