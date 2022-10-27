
/**
 *
 *  Removing Digits
 *  27 -> 27 - 7 => 20 - 2 => 18 - 8 => 10 - 1 => 9 - 9 => 0
 *
 *
 *  let ans = 0
 *  ans += 1;
 *  if(n%10 != 0){
 *      n -= n%10;
 *  }
 *  else{
 *      n -= n%100;
 *  }
 *  f(n)
 *
 *
 */

function getDigits(n) {
    let digits = [];
    while (n > 0) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }
    return digits;
}

function digitsRemoving(n) {
    if (n == 0) return 0;
    if (n < 10) return 1;
    let digits = getDigits(n);
    let ans = Infinity;
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] == 0) continue;
        ans = Math.min(ans, digitsRemoving(n - digits[i]));
    }
    return 1 + ans;
}

console.log(digitsRemoving(100));