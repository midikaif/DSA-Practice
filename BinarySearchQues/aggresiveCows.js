
/**
 *              <-----AGGRESIVE COWS-------->
 *  
 * Farmer John has built a new long barn, with N (2 <= N <= 100,000) stalls. The stalls are located along a straight line at positions x1,...,xN (0 <= xi <= 1,000,000,000).

His C (2 <= C <= N) cows don't like this barn layout and become aggressive towards each other once put into a stall. To prevent the cows from hurting each other, FJ wants to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance?
 * 
 * 
 * In the above given problem, we are expected to maximise the minimum distance
between two cows. Hence a Minimax Searching problem it is.
Note: These minimax problems are different than the one mentioned in AI and related
subjects.
And if at any point of time we see that we are trying to solve a minimax problem then
Binary Search is very helpful in those cases.
A lot of times these minimax problems are asked clubbed with binary search on answer.

 * 
 * 
 * Input -> N = 5, C = 3
 *          1, 2, 8, 4, 9
 * 
 *          1, 2, 4, 8, 9
 *          Case1 -> C1 -> 1; C2 -> 2; C3 -> 4; MIN => (2-1) OR (4-2) => 1;
 *          Case2 -> C1 -> 1; C2 -> 2; C3 -> 8; MIN => 1
 *          Case3 -> C1 -> 1; C2 -> 2; C3 -> 9; MIN => 1
 *          Case2 -> C1 -> 1; C2 -> 4; C3 -> 8; MIN => 3
 *          Case2 -> C1 -> 1; C2 -> 4; C3 -> 9; MIN => 3
 * 
 *          MAX (MIN) => 3;
 * 
*/

function aggresiveCows(stalls, c, mid) {
    /**
     * Time - O(n)
     */
    let lastPlacesCow = 0;
    c--;
    for (let i = 1; i < stalls.length; i++){
        if ((stalls[i] - stalls[lastPlacesCow]) >= mid) {
            c--;
            lastPlacesCow = i;
        }
        if (c == 0) return true;
    }
    return false;

}

// 1, 2, 4, 8, 9

function minmax(stalls, c) {
    /**
     * Time - O(nlogn)
     * space - O(1)
     */
    stalls.sort((a, b) => a - b);
    let ans = 1;
    let start = 1, end = stalls[stalls.length - 1];
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (aggresiveCows(stalls, c, mid)) {
            ans = mid;
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return ans;
}

console.log(minmax([3, 4, 5, 7, 9, 12], 3));


/**
 * [1, 2, 4, 8, 9]
 *  C     C  C
 * minDistance -> 3
 * 
 * [3, 4, 5, 7, 9, 12]
 *  C        C     C
 */