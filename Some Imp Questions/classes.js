

// console.log(arr.reduce(min))
// console.log(arr.reduce(max))







    function count(initializer, curr) {
    if(curr === 0) {
        initializer + 1;
    }
    return initializer;
    }

    function sortZeroOneCount(arr) {
    let countZero = arr.reduce(count);
    let result = [];
    for(let i=1;i<=countZero;i++) {
        result.push(0);
    }
    for(let i=1;i<=arr.length - countZero;i++) {
        result.push(1);
    }
    return result;

    }





function maxProfit(arr) {
    let maxProfit = 0;
    let priceTillNow = arr[0];
    for(let value of arr) {
        if(value > priceTillNow) {
            maxProfit+=value - priceTillNow;
        }
        priceTillNow = value;
    }
    return maxProfit;
}

console.log(maxProfit([100, 180, 260, 310, 40, 535, 695]))



// 1, 2, 5, 4, 3, 6, 7
// i = 3
// j = 5

console.log(checkSubarray([1, 2, 5, 4, 3, 6, 7]))
function checkSubarray(arr) {

    let n = arr.length;
    let i;
    for(i=1;i < n && arr[i-1] < arr[i];i++) {}

    if(i === n) {
        return true;
    }

    let j = i;

    while(j < n && arr[j-1] >= arr[j]) {
        if(i > 1 && arr[i-2] > arr[j]) {
            return false;
        }
        j++;
    }
    if(j === n) {
        return true;
    }

    let k = j;
    if(arr[i-1] > arr[k]) {
        return false;
    }

    while(k < n) {
        if(arr[k-1] > arr[k]) {
            return false;
        }
        k++;
    }

    return true;

}