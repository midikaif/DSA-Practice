
//   /===============================================/
let str = 'pwwkew';
/**
 * 
 *              <===Longest Substring Without Repeating Characters====>
 *      Input: s = "abcabcbb"
 *      Output: 3
 *      Explanation: The answer is "abc", with the length of 3.
 * 
 */
let start = 0, end = 0;
let obj = {};
let len = 0;
let ans = 0;

while (end != str.length) {
    if (!obj[str[end]]) {
        obj[str[end]] = 1;
    }
    else {
        obj[str[end]]++;
    }

    if (obj[str[end]] > 1) {
        while (obj[str[end]] != 1) {
            obj[str[start]]--;
            start++;
        }
    }
    len = end - start + 1;
    if (len > ans) ans = len;
    end++;
}
console.log(ans);