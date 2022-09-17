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
