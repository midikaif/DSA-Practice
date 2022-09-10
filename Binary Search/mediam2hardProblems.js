/**
 * Problem - Pair Of Topics
 * 
 * The next lecture in a high school requires two topics to be discussed. The i-th topic is interesting by ai units for the teacher and by bi units for the students.

The pair of topics i and j (i<j) is called good if ai+aj>bi+bj (i.e. it is more interesting for the teacher).

Your task is to find the number of good pairs of topics.
---------------------------------
Ex:
A = [4,8,2,6,2] // teacher → i = 1, j = 2 → Ai = 8 Aj = 2 → Ai+Aj = 10
B = [4,5,4,1,3] // students → Bi = 5, Bj = 4 → Bi + Bj = 9 → 10 > 9
Ans: 7
All the good pairs are (0,1) (0,3) (1,2) (1,3) (1,4) (3,4) (2,3)

-------------------------------------

----Simplify the problem----

--------------------------------------

Ai + Aj > Bi + Bj
Ai - Bi > Bj - Aj
Ai - Bi > -(Aj - Bj)
Assume Ai - Bi as Ci
Ci > -Cj
----------------------------

We can use the upperbound to solve this problem;
Example:

A = [4,8,2,6,2]
B = [4,5,4,1,3]
C = [0,3,-2,5,-1] // Ci = Ai - Bi

now sort the array C in ascending order

C = [-2,-1,0,3,5]

now for i = 0, we need to find all j > i such that -Ci < Cj
C0 = -2 → -C0 = 2, so from index 1 to C.length - 1 we need to find all values greater
than 2
Upper bound of 2 in C  is index 3, so everything starting from index 3 to the last index
will all be greater than -C0. For i = 0, we got n-upper_bound(-C0) → n-upper_bound(2) →
n-3 → 5-3 → 2
So for i = 0, we got 2 pairs.

thats how this all will work...

 */

function upperbound(arr, find, start) {
    let end = arr.length, ans;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] <= find) {
            start = mid + 1;
        }
        else {
            ans = mid;
            end = mid - 1;
        }
    }
    return arr.length - ans;
}


// let a = [4, 8, 2, 6, 2];
// let b = [4, 5, 4, 1, 3];

// let c = [];
// for (let i = 0; i < a.length; i++) {
//     c[i] = a[i] - b[i];
// }
// c.sort((a, b) => a - b);
// let ans = 0;
// for (let i = 0; i < c.length - 1; i++) {
    // let ub = upperbound(c, -c[i], i+1);
    // ans += ub;
// }
// console.log(ans);

// ----------------------------------------------------------------------

// Problem 2

/**
 * Given an array of integers of length n (n ≤ 2000) we need to find the count of triplets
such that the triplets cannot form a triangle.
Example: [5,2,9,6]

Ans: 2 → (5,2,9) (2,9,6) these two triplets will not form a triangle.



----solution
To generate all possible a,b we can try to get all possible pairs in O(n^2) time. Now for
a given pair, if we need to find all the values greater than it’s sum, then if we have the
access to the upper_bound then all the values from upper_bound are going to be
greater than it.

[5,2,9,6,11] → [2,5,6,9,11]

let’s say a = 2, b = 5, a+b = 7 → upper_bound will be index 3 → from here we got 2
triplet
let’s say a = 2, b = 6, a+b = 8 → upper_bound will be index 3 → from here we got 2
triplet

 */


// let arr = [1, 2, 3];
// arr.sort((a, b) => a - b);
// let n = arr.length, result = 0; //[2, 5, 6, 9];

// for (let i = 0; i < n - 1; i++){
//     for (let j = i + 1; j < n-1; j++){
//         let ub = upperbound(arr, arr[i] + arr[j], j + 1)
//         result += ub;
//     }
// }

// console.log(result);

// -----------------------------------------------------------


/**
 * Problem 3
 * You are given an array of length n (n ≤ 100), we need to count all possible sextuples
which follow the given equation
((a*b+c)/d ) - e = f // d != 0
Note: In a sextuple for this given question numbers can be repeated.
Example: [2,3] → one of the sextuples can be (a=2,b=3,c=2,d=2,e=2,f=2)
Ans: 4 , total 4 different sextuples will be there

        Simplified Way ----
        ((a*b+c)/d ) - e = f // d != 0
        ((a*b+c)/d) = f + e;
        (a*b+c) = (f+e)*d

 */

/**
 * SOLUTION
 * 
 * What is this simplified form denoting ?
The meaning is if we are able to find two triplets (a,b,c) and (d,e,f) such that they follow
the above equation or we can say, if we put them in the above equation the values are
equal then, these two triplets can be combined to form a sextuple.
Ex: (2,3,2) (2,2,2) → (2,3,2,2,2,2)
2*3 + 2 = 8
(2+2)*2 = 8
And, n can be as big as 100, so if we want to generate all possible triplets complexity
will be O(n^3) so generating triplets will be within the bounds.

( 3 2 3 )
( 3 2 2 )
( 2 3 3 )
( 2 3 2 )
( 2 2 3 )
( 2 2 2 )
( 3 3 3 )
( 3 3 2 )
We will now have two arrays lhs and rhs, in lhs instead of putting the triplet directly, I will
put the value of the triplet that we get by putting it in the lhs equation a*b+c
lhs = [9, 8, 9, 8, 7, 6, 12, 11]
And similarly we will create rhs array and instead of putting the triplets we will put the
value that we get by putting the triplets in the rhs equation (f + e)*d


rhs = [15, 10, 15, 10, 12, 8, 18, 12]
(3,2,2) + (2,2,2) ⇒ (3,2,2,2,2,2)
( 2 3 2 ) + (2,2,2) ⇒ (2,3,2,2,2,2)
(3,3,3) + (2,2,3) ⇒ (3,3,3,2,2,3)
(3,3,3) + ( 3 3 2 ) ⇒ ( 3 3 3 3 3 2 )
The above 4 sex tuples are formed by getting common values from both lhs and rhs,
because these common values denote that there are two triplets which satisfy our
simplified equation.
So all we have to do is find the total common elements in two arrays.
We can iterate on any one say LHS, and for each value of lhs we will try to find the
number of occurrences of the value.
How to find the occurrences efficiently ?
Let’s sort both of them, and then for each element of LHS we will apply lower bound and
upper bound i.e. binary search on the rhs


lhs = [9, 8, 9, 8, 7, 6, 12, 11] → [6,7,8,8,9,9,11,12]
rhs = [15, 10, 15, 10, 12, 8, 18, 12] → [8,10,10,12,12,15,15,18]
let’s do for 12, so lower bound of 12 in rhs is index 3, and upper bound is index 5. Total
occurrences of 12 is ub - lb ⇒ 5-3 ⇒ 2
lb → first index ≥ x
ub → first index > x


*/

/**
 * TIME -> O(n^3logn)
 * SPACE -> O(n^3)
 */

function upper_bound(arr, find) {
    let ans, start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] <= find) {
            start = mid + 1
        }
        else {
            ans = mid;
            end = mid - 1;
        }
    }
    return ans;
}

function lowerbound(arr, find) {
    let ans, start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] < find) {
            start = mid + 1;
        }
        else {
            ans = mid;
            end = mid - 1;
        }
    }
    return ans;
}

// let arr1 = [3, 2];
// let lhs = [], rhs = [];
// for (let i = 0; i < arr1.length; i++){
//     for (let j = 0; j < arr1.length; j++) {
//         for (let k = 0; k < arr1.length; k++) {
//             lhs.push((arr1[i] * arr1[j]) + arr1[k]);
//             if(arr1[i] != 0) rhs.push((arr1[i])*(arr1[j]+arr1[k]))
//         }
//     }
// }

// lhs.sort((a, b) => a - b);
// rhs.sort((a, b) => a - b);

// let result1 = 0;
// for (let i = 0; i < lhs.length; i++) {
//     let ub = upper_bound(rhs, lhs[i]);
//     let lb = lowerbound(rhs, lhs[i]);
//     result1 += (ub - lb);
// }

// console.log(result1);


// ---------************************************------------------------

/**
 * Problem 4
 * We are given an array of length n (n ≤ 34), we need to count the number of subsets
whose sum lie in the range A, B

We cannot generate the subsets of the whole array, but we can think in the manner that
what if, we divide our array into two halves, (in the worst case one half will be of size 17)
And generate all possible subsets of each half separately, then can we do something ?


Ex: [1,2,3,4]
[1,2] → [], [1], [2], [1,2] → [0,1,2,3]
[3,4]→ [], [3], [4], [3,4]→ [0,3,4,7]


Let’s say instead of storing the subsets, we will store their sum. Now we have two array
X and Y which have got sum of subsets of first and second half of the array.
Assume A = 0, B = 6 → there are some subsets like [1], [2], [1,2] whose sum is ≥ 0 and
≤ 6 and are coming just form the first half. There are some subsets like [3] [4] whose
sum ≥ 0 and ≤ 6 and they are coming just from the second half.
But there will some subsets which can come by combining the two halves ? [1,3] [1,4]
[2,3] [2,4] [1,2,3]


So, it’s easy to find the subsets whose sum is ≥A and ≤B and are coming from just first
or second
half. But how to calculate the combined subsets whose sum is ≥ A and ≤B.
Let’s say we consider some value v1 from the first half subset sum, to find which
subset in the second half v2 can combine with the subset with sum v1 so that sum lies
in the given range can we say that


A <= v1 + v2 <= B
// and we already fixed v1 form the left half subsets so
A - v1 <= v2 <= B - v1
and to find the subsets with a sum ≥ A - v1 can we use lowerBound ? and sum ≤ B - v1
can we use upperBound on the second half array.
[1,2] → [], [1], [2], [1,2] → X [0,1,2,3]
[3,4]→ [], [3], [4], [3,4]→ Y [0,3,4,7]
A = 0, B = 6

Iteration 0
v1 = 0 → [] empty subset
A - v1 = 0, B - v1 = 6
lowerBound(0) → index 0 and upperBound(6) → index 3 (for upperBound we have to
see values to the left of it, why ? because we can sum to be less than or equal to B-v1,
upperBound gives us first value greater than B-v1, so everything to left of upper bound
will be valid)
Iteration 1
v1 = 1
A - v1 = -1, B - v1 = 5
lowerBound(-1) → index 0 and upperBound(5) → index 3




 */


/**
 * [1]
 * [-2]
 * [3]
 * [1,-2]
 * [-2,3]
 * [1,-2,3]
 * 
 */
//  let arr = [1, -2, 3];
//  let A = -1, B = 2;
//  const left = arr.slice(0, arr.length/2);
//  const right = arr.slice(arr.length/2, arr.length);
// const m = subsets(left); // implement subsets function
// const n = subsets(right);
// m.sort((a, b) => a-b);
// n.sort((a, b) => a-b);
// let ans = 0;
// for(let i = 0; i < m.length; i++) {
// let lb = lowerBound(n, A-m[i]); // implement lowerbound
// let ub = upperBound(n, B-m[i]); // implement upperbound
// ans += (ub - lb);
// }
// console.log(ans);










// ----------------- *** *** *** *** *** *** *** *** *** *** ---------------


/**
 * 
 *              median of two sorted arrays;
 * 
 *              [7,12,14,15] => 4 first1 = 7; last1 = 15   [1,2,3,4,9,11] => 6 first2 = 1; last2 = 11
 * 
 * 
 *      
 * 
 *      4+6 = 10/2 => 5
 *      i = 0; arr2[i] < arr1[i] i++;
 *      i = 1; arr2[i] < arr1[i] i++;
 *      i = 2; arr2[i] < arr1[i] i++;
 *      i = 3; arr2[i] < arr1[i] i++;
 *      i = 4; arr2[i] < arr1[i] i++;
 *          
 *        if(i==4){
 *          ( arr2[i] + arr1[j] ) /2;
 * }
 *      
 * 
 *             first1 > first2         last1 > last2
 *                [1,2,3,4,(7,9),11,12,14,15]
 */









