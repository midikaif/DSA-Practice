/**
 * 
 * 
 * 
 */


function arrayPermutation(arr1, arr2) {
    let stack = [];
    // stack.push(arr1[0])
    let j = 0;
    for (let i = 1; i < arr1.length; i++){
        stack.push(arr1[i]);
        while (stack.length>0 && stack[stack.length - 1] === arr2[j]) {
            stack.pop();
            j++;
        }
    }
    if (stack.length > 0) return false;
    return true;
}