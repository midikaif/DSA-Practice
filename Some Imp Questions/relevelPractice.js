 // ************************************************
// <--------------UNDERSTAND IT CAREFULLY--------->
// ************************************************
function sumOfPair(nums, target_num) {
    var map = [];
    // console.log(map[23])
    var indexes = [];
    for (var idx = 0; idx < nums.length; idx++) {
        if (map[nums[idx]] != null) {
            var index = map[nums[idx]];
            indexes.push([index, idx]);
        }
        else {
            map[target_num - nums[idx]] = idx;
        }
    }
    return indexes;
}
console.log(...(sumOfPair([1,1,2,3,4,9,9],10)));
// ---------------------------------------

// function sumOfTwo(arr, target) {
//     let map = [];

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[target-arr[i]] === )
//     }
// }




// **************************************************
let commonElements = (arr1, arr2, m, n) => {
    let i = 0, j = 0;
    let outputArr = []
    while (i < m && j < n) {
        if (arr1[i] < arr2[j])
            i++;
        else if (arr1[i] > arr2[j])
            j++;
        else {
            outputArr.push(arr1[i]);
            i++;
            j++;
        }
    }
    return outputArr;
}

// console.log(commonElements([3, 3, 6, 6], [2, 3, 4, 5, 6], 4, 5))
// **********************************************************

// --------------------------------------

function divideEvenly(input) {
    if (input % 2 === 0)
        return 'Yes';
    else
        return 'No'
}

// console.log(divideEvenly(8));
// console.log(divideEvenly(7));
// --------------------------------------------------

let isTriangle = function (a, b, c) {
    if ((a + b) > c && (b + c) > a && (a + c) > b)
        return `${a}, ${b}, ${c} is a Triangle`;
    else
        return `${a}, ${b}, ${c} is not a Triangle`;
}

// console.log(isTriangle(1, 2, 3));
// console.log(isTriangle(7, 10, 5));
// ---------------------------------------------------------

let oppositeSign = (a, b) => (a > 0 && b < 0) || (a < 0 && b > 0)

// console.log(oppositeSign(-10, 10))
// console.log(oppositeSign(-10, -10))
// ------------------------------------------------------

function smallestWithoutCompareOperator(a, b, c) {
    return Math.min(x, Math.min(y, z));
}

let CHAR_BIT = 8;

function min(x, y) {
    return y + ((x - y) & ((x - y) >> (32 * CHAR_BIT - 1)))
}

let x = 12, y = 44, z = 2;

// console.log("Smallest of 3 numbers is " + smallest(x, y, z));
// -------------------------------------------------

let zerosInFact = function (input) {
    let factorial = 1;
    let count = 0;
    for (let i = input; i > 0; i--) {
        factorial *= i
    }
    console.log(factorial);
    while (factorial % 10 === 0) {
        count++;
        factorial /= 10;
    }
    return count;
}

// console.log(zerosInFact(6));
// --------------------------------------------------

let uniqueElements = (arr) => {
    let obj = {};
    // console.log(obj["1"])
    for (let value of arr) {
        if (obj[value])
            obj[value] += 1
        else
            obj[value] = 1;
    }
    let arr1 = []
    for (let value in obj) {
        if (obj[value] === 1) {
            value = Number(value)
            arr1.push(value)
        }
    }
    if (arr1.length > 0)
        return arr1;
    return -1;
}
// console.log(uniqueElements([3, 1, 2, 5, 3]))

//  ---------------WITH XORRRRRRRR

function findSingle(ar, N) {
    // Do XOR of all elements and return
    let res = ar[0];
    for (let i = 1; i < N; i++)
        res = res ^ ar[i];
    return res;
}
let Array = [3, 2, 1, 2, 3];
let N = 5;
// console.log("Element occurring once is " + findSingle(Array, N));

// --------------------------------------

let firstUnique = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j])
                count++;
        }
        if (count === 1)
            return arr[i];
    }
}

// console.log(firstUnique([3, 5, 2, 1, 2, 3]));
// -----------------------------------------------------
// A = [10, 20, 10, 40, 50 , 70], N=50
let sumOfNumber = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (n - arr[i] === arr[j])
                return [i, j];
        }
    }
}

// console.log(sumOfNumber([10, 20, 10, 40, 50, 70], 50))


// --------------------------------------------

let majorityElement = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = i; j < n; j++) {
            if (arr[i] === arr[j])
                count++;
        }
        if (count > n / 2)
            return arr[i];
    }
    return -1;
}

// console.log(majorityElement([3, 1, 1, 1, 1, 3, 3, 1, 2]))
// ----------------------------------------

function findMajority(arr, n) {
    let maxCount = 0;
    let index = -1;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j])
                count++;
        }
        if (count > maxCount) {
            maxCount = count;
            index = i;
        }
    }
    if (maxCount > n / 2)
        document.write(arr[index]);
    else
        document.write("No Majority Element");
}
// let arr = [3, 1, 3, 3, 2];
// let n = arr.length;
// findMajority(arr, n);


// ---------------------------------------
let allSubArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            console.log(arr.slice(i, j + 1));
        }
    }
}

// allSubArray([1, 2, 3, 4, 5])

// ---------------------------------

function subArray(arr, n) {
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            for (let k = 0; k < n; k++)
                console.log(arr[k] + " ");
        }
    }
}

// let arr = [1, 2, 3];
// subArray(arr, arr.length);


// -----------------------------------


function countSubarray(arr, n, B) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            if (sum + arr[j] < B) {
                sum += arr[i];
                count++;
            }
        }
    }

    return count;
}
let A = [2, 5, 6];
var B = 10;
var size = A.length;
var count = countSubarray(A, size, B);
// console.log(count);

// -------------------------------------------
function completeSeries(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 === arr[i + 1]) {

        }
        else
            return arr[i] + 1;
    }
}

// ==================
const MissingSeries = (arr) => {
    let start = parseInt(arr[0]);
    let end = parseInt(arr[arr.length - 1]);
    let currentSum = 0;
    for (let i = start; i <= end; i++) {
        currentSum += i;
    }
    const actualSum = arr.reduce((previousValue, currentValue) => {
        return (parseInt(previousValue) + parseInt(currentValue))
    }, 0)
    return (currentSum - actualSum);
}
// console.log(MissingSeries([1, 2, 3, 5]));

// console.log(completeSeries([1,2,3,5]))

// ==========================================

const oddLetter = letter => {
    const letterArr = letter.split(' ');
    const letterLen = letterArr.length;
    const middle = (letterLen - 1) / 2;
    const newLetter = letterArr.slice(middle).concat(letterArr.slice(0, middle))
    const arr = [];
    letterArr.forEach(element => {
        arr.push(newLetter.join(' '));
        newLetter.pop();
        newLetter.unshift(' ');
    });
    arr.reverse();
    return arr.join('\n');
}


// console.log(oddLetter('W E L C O M E'));


function oddletter1(string) {
    let arr = string.split(' ');
    let middle = (arr.length - 1) / 2;
    let changedString = arr.slice(middle).concat(arr.slice(0, middle));
    let newArr = [];
    arr.forEach(element => {
        newArr.push(changedString.join(' '));
        changedString.pop();
        changedString.unshift(' ');
    });
    newArr.reverse();
    return newArr.join('\n');

}

// console.log(oddletter1('W E L C O M E'));

// =====================================================

// Q1: You have to return the total number of steps to make a number(n) to 0. You can perform the following
// operations
// 1. Choose one digit from that number.
// 2. Subtract that chosen digit from the given number.
// 3. Repeat this till the number becomes 0.

// I/P: 27

// O/P: 5

const nullify = (N) => {
    let table = new Array(N + 1).fill(1e9);
    table[0] = 0;

    for (let i = 0; i <= N; i++) {
        let str = i.toString();
        for (let c = 0; c < str.length; c++) {
            let xo = i - parseInt(str[c]);
            table[i] = Math.min(table[i], table[xo] + 1);
        }
    }
    return table[N];
}

//   let N = 27;
// console.log(nullify(N));

//   ===============================================================

// Q2: You have to return the total number of steps to make a number(n) to 1. Perform these tasks to achieve the goal.

//  1. n = n -1

//  2. if(n%2 == 0) n = n/2

//  3. if(n%3 == 0) n = n/3

// I/P: 10

// O/P: 3

const solve = (table, i) => {
    let mini = table[i - 1];

    if (i % 2 == 0) {
        mini = Math.min(mini, table[i / 2]);
    }
    if (i % 3 == 0) {
        mini = Math.min(mini, table[i / 3]);
    }
    table[i] = mini + 1;
}

const unify = (N) => {
    let table = new Array(N + 1).fill(0);
    table[1] = 0;

    for (let i = 2; i <= N; i++) {
        solve(table, i)
    }

    return table[N];
}

// console.log(unify(10));

// ================================================
let subSeq = [];
let subSequence = (arr, i, curr) => {
    if (i === arr.length) {
        subSeq.push([...curr]);
        console.log(curr);
        return;
    }
    subSequence(arr, i + 1, curr);
    curr.push(arr[i]);
    subSequence(arr, i + 1, curr);
    curr.pop();
}

subSequence([1, 2, -1], 0, []);
function summ(subSeqq) {
    for (let i = 0; i < subSeq.length; i++) {
        let sum1 = subSeq[i].reduce((acc, curr) => {
            let sum = 0;
            sum += acc + curr;
            if (sum === 0) {
                return sum;
            }
        }
        )
    }
}
console.log(summ(subSeq));
console.log(subSeq);


let subArraySum = (arr, sum) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            newArr.push(arr.slice(i, j + 1));
            // arr.slice(i, j + 1)+;

        }
    }
    let sumArr = [];
    for (let elements of newArr) {
        let checkSum = 0;
        for (let element of elements) {
            checkSum += element;
        }
        if (checkSum === sum)
            sumArr.push(elements);
    }
    return sumArr;
}
// subArraySum([1, 2, 1],2);


//     * 3 *
// 1 + 1 + 1
// 2 + 1 + 1
// 1 + 2 + 1
// 1 + 1 + 2

function totalSum(n) {
    let first = 0, second = 1;
    if (n === first)
        return 0;
    if (n === second)
        return first + second;
    let feb = [first, second];
    while ((n - 1) !== 0) {
        let temp = first + second;
        first = second;
        second = temp;
        feb.push(temp);
        n--;
    }
    let sum = feb.reduce((curr, acc) => curr + acc);
}

// totalSum(4)

function random(n) {
    let temp1 = [], temp2 = [];
    let temp = n;
    let one = 1;
    let two = 2;
    let count = 0;
    while (1) {
        while (temp > 0) {
            if (count === 1) {
                temp1.push(two);
                count--;
                temp -= 2;
            }
            temp1.push(one);
            temp--;
        }
        count++;
        temp2.push([...temp1]);
        temp1.length = 0;
        temp = n;
    }
}
// random(4);



var isPalindrome = function (x) {
    let result;
    result = palindrome(x, 0, x.length - 1);
    return result;
};

function palindrome(x, i, j) {
    if (i >= j)
        return true;
    if (x[i] === x[j])
        palindrome(x, i + 1, j - 1);
    else
        return false;
}
// isPalindrome('121')


// romannumbers

var romanToInt = function (s) {
    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i + 1]] > obj[s[i]]) {
            sum += obj[s[i + 1]] - obj[s[i]];
            i++;
        }

        // if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
        //     sum += obj[s[i]];
        //     sum = obj[s[i + 1]] - obj[s[i]];
        //     i++;
        // }

        else {
            sum += obj[s[i]];
        }
    }
};

// romanToInt("MCMXCIV")
var longestCommonPrefix = function(strs) {
    let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
    
    for (let str of strs) {
        while (str.slice(0, prefix.length) != prefix) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
};

let res = longestCommonPrefix(["flower","flow","flight"]);

// console.log(res);
function sumt(cardPoints, k){
let n = cardPoints.length - 1;
    let totalSum = 0, minSum = +Infinity;
    let minSubarr = [];
    for(let i =1; i<n; i++){
        totalSum += cardPoints[i-1];
        let temp = cardPoints[i] + cardPoints[i-1];
        if(temp<minSum){
            minSum = temp;
        }
    }
    return totalSum-min;
}

// sumt([1, 2, 3, 4, 5, 6, 1], 3);
var isValid = function(s) {
    let stack = [], n = s.length;
    let temp;
    let obj = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    for(let i = 0; i<n; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
        }
        else {
            if (stack.length === 0)
                return false;
            let c = stack.pop();
            if((s[i] === ')' && c === '(') || (s[i] === '}' && c === '{') || (s[i] === ']' && c === '[')){
                
            }
            else {
                return false;
            }
        }
    }
    if (stack.length === 0)
        return true;
    return false;
};

// isValid('()()')


var twoSum = function (nums, target) {
    let map = {};
    console.log(map[3])
    for (let i = 0; i < nums.length; i++) {
        let x = target - nums[i];
        if (map[x]===0) {
            return [map[nums[i]], i];
        }
        else {


            map[nums[i]] = i;
        }
    }
}

// twoSum([2,7,11,15], 9)


var maxProfit = function(prices) {
    let buy, sell, profit;
    let min = +Infinity, max = -Infinity;
    let index0, index1;
    buy = prices[0];
    for(let i = 0; i<prices.length; i++){
        for(let j = i+1; j<prices.length; j++){
            if(prices[j] - prices[i] > max){
                max = prices[j] - prices[i];
            }
        }
    }
    
    if(max>0){
        return max;
    }
    return 0;
};
// maxProfit([7, 1, 5, 3, 6, 4])
// abc bac
 
function occur(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++){
        if (!obj[str[i]]) {
            obj["str[i]"] = 1;
        }
        else {
            obj[str[i]] += 1; 
        }
    }
    return obj;
}

// occur('relevel')



function target(arr, target) {
    let map = {};
    for (let i = 0; i < arr.length; i++){
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        }
        else {
            map[arr[i]] += 1;
        }
    }
    let count = 0;
    for (let key of Object.keys(map)) {
        if (map[target - key]) {
            count += map[key]*map[target - key]
        }
    }
    return count;
}

// console.log(target([1,2,3,7,9,9],10))
// console.log(target([1,1,2,3,4,9,9],10))
// console.log(target([-2,1,2,3,7,9],10))
