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


let arr = ['eat', 'ate', 'cat', 'act', 'toe'];
let newArr = [];
let obj = {};
for (let i = 0; i < arr.length; i++){
    let tmp = arr[i].split('').sort().join("");
    if (!obj[tmp]) {
        obj[tmp] = [];
        obj[tmp].push(arr[i]);
    } else {
        obj[tmp].push(arr[i]);
    }

}
for (let key of Object.keys(obj)) {
    newArr.push(obj[key]);
}

console.log(newArr);

