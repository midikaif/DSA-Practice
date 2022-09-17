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
