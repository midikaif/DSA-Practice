
// -------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>
/**
 * Problem 4
 * Find the square root of a number in a whole number
 * input->
 *          99
 * result ->
 *          9
 */

 function search(num) {
    let start = 1, end = Math.floor(num / 2);
    let ans;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (mid * mid <= num) {
            ans = mid;
            start = mid + 1
        }
        else {
            end = mid - 1;
        }
    }
    return ans;

}
// console.log(search(9));

// -------------******************************************------------------------

function squareRoot(number, precision)
{
    let start = 0, end = number;
    let mid;

    // variable to store the answer
    let ans = 0.0;

    // for computing integral part
    // of square root of number
    while (start <= end)
    {
        mid = (start + end) / 2;
           
        if (mid * mid == number)
        {
            ans = mid;
            break;
        }

        // incrementing start if integral
        // part lies on right side of the mid
        if (mid * mid < number) {
            start = mid + 1;
            ans = mid;
        }

        // decrementing end if integral part
        // lies on the left side of the mid
        else {
            end = mid - 1;
        }
    }

    // For computing the fractional part
    // of square root upto given precision
    let increment = 0.1;
    for (let i = 0; i < precision; i++) {
        while (ans * ans <= number) {
            ans += increment;
        }

        // loop terminates when ans * ans > number
        ans = ans - increment;
        increment = increment / 10;
    }
    return ans;
}


// console.log(squareRoot(99,3));
