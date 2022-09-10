// let count = 0;
// function sumDigit(n){
//   if(n===0) return;
//   if(n%10 !== 0){
//       count++;
//     sumDigit(n - n%10)
//   }
//     else{
//         count++;
//     sumDigit(n - (n/10))
//     }
// }
// sumDigit(27)
// console.log(count);


// var maxSubArray = function(nums) {
//   let max = 0;
//   let l=0, r=0, sum = 0;
//   for(let i = 0; i<nums.length; i++){
//       sum += nums[l]
//       if(sum < 0){
//           l++;
//           sum = 0;
//       }
//       else {
//         if (max > sum) {
//           r = max;
          
//           }
//           max = sum;
//           l++;
//       }
//   }
//   return max;
// };

// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);




// let grid = [];
// let n = 5;

// for (let i = 0; i < n; i++){
//   let temp = Array(n).fill(-1);
//   grid.push(temp);
// }

// function f(i, j, c) {
//   //Base Case
//   if (i >= n || j >= n || i < 0 || j < 0 || grid[i][j] !== -1) {
//     //Either the cell is outside or already visited
//     return;
//   }

//   if (c === n * n - 1) {
//     //Completed the TOUR & Last Step is this
//     grid[i][j] === c;
//     let str = '';
//     for (let i = 0; i < n; i++){
//       for (let j = 0; j < n; j++){
//         str += grid[i][j] + ' ';
//       }
//       str += '\n';
//     }
//     console.log(str);
//     console.log('*********');
//     grid[i][j] = -1;
//     return;
//   }

//   grid[i][j] = c;
//   f(i + 1, j + 2, c + 1);
//   f(i + 2, j + 1, c + 1);
//   f(i + 1, j - 2, c + 1);
//   f(i + 2, j - 1, c + 1);
//   f(i - 1, j + 2, c + 1);
//   f(i - 2, j + 1, c + 1);
//   f(i - 1, j - 2, c + 1);
//   f(i - 2, j - 1, c + 1);
// }




function binaryG(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (x === arr[mid] || x > arr[mid-1]) {
      if (arr[mid + 1] !== x)
        return mid+1;
    }
    if (x > arr[mid]) {
      start = mid + 1;
    }
    else {
      end = mid;
    }
  }
}

console.log(binaryG([1,2,3,3,3,4,6,7], 5))