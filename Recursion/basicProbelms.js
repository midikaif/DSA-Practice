



// -----------------------------------------------------------------------------------
// RECURSION         RECURSION              RECURSION      RECURSION        RECURSION
//                    <---------------------------------------->
//       RECURSION            RECURSION               RECURSION       RECURSION
// -----------------------------------------------------------------------------------------



function starRecursion(x, str) {
    // if (i <= x) {
    if (x == 0) return;
    str += '*';
    console.log(str);
    starRecursion(x - 1, str);

}
// }
// starRecursion(3, '');

function printS(n, str) {
    if (n == 0) {
        console.log(str);
        return;
    }
    function printL(n) {
        if (n == 0) return;
        str += '*';
        printL(n - 1);
    }
    printL(n);
    str += '\n';
    printS(n - 1, str);

}
// printS(1, '')

function subsetRecursion(arr, i, str) {
    if (arr.length === i) {
        console.log(str);
        return;
    }
    subsetRecursion(arr, i + 1, str + arr[i])
    subsetRecursion(arr, i + 1, str);
}

// subsetRecursion([1, 2, 3], 0, '');



function subset(arr, i, res) {
    if (arr.length == i) {
        console.log(res);
        return;
    }
    subset(arr, i + 1, res);
    res.push(arr[i])
    subset(arr, i + 1, res);
}

// subset([1, 2, 3], 0, []);

function isSorted(arr, i) {
    if (i == arr.length) return true;
    if (arr[i] >= arr[i - 1]) return isSorted(arr, i + 1);
    else return false;
}
// console.log(isSorted([10, 1, 2, 3, 6, 9, 23, 110], 1));
