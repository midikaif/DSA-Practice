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