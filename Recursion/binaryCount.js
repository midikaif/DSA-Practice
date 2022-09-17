
let totalP = 0
function mazePath(i, j, n, m, osf) {
    if (i == n - 1 && j == m - 1) {
        console.log(osf);
        totalP += 1;
        return;
    }
    if (i >= n || j >= m) return;
    mazePath(i + 1, j, n, m, osf + "R");
    mazePath(i, j + 1, n, m, osf + "D");
}
mazePath(0, 0, 3, 3, '');
console.log(totalP);


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


function binaryCount(n) {
    // if (n < 1) return 0;
    if (n == 1) return 2;
    if (n == 2) return 3;
    return binaryCount(n - 1) + binaryCount(n - 2);
}

// console.log(binaryCount(5));

function binaryCountPrint(n, str) {
    if (n === 0) {
        console.log(str)
        return;
    }
    // if (n === 2) {
    //     console.log(str)
    //     return;
    // }
    binaryCountPrint(n - 1, str + '0');
    binaryCountPrint(n - 1, str + '1');
}

// console.log(binaryCountPrint(2, ''));