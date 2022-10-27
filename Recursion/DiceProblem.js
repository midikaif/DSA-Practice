/*
                            *** *** Problem *** ***

    Your task is to count the number of ways to construct sum n by throwing a dice one or more times. Each throw produces an outcome between 1 and 6.

    For example, if n=3, there are 4 ways:
    
    1+1+1
    1+2
    2+1
    3

                n=3
                /
               /

*/
function diceProb(n) {
    if (n === 0) {
        return 1;
    }
    let ans = 0;
    for (let i = 1; i <= 6; i++) {
        if (n - i < 0) continue;
        ans += diceProb(n - i);
    }
    return ans
}
console.log(diceProb(3));