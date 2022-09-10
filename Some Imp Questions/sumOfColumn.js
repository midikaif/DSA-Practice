// Sum of column wise in 2D array...
let arr = [
      [3,4,5],
      [3,4,2],
      [2,3,4],
      [4,4,4]
]

function sumColumn(arr){
      let a = arr.reduce((acc,curr) => {
            let arr = [];
            for(let i = 0; i<acc.length; i++){
                  arr[i] = acc[i] + curr[i];
            }
            return arr
      })
      console.log(a)
}

// -----------------------------------

// let sum = arr.reduce((a,b) => a.map((a, index) => a + b[index]));
// console.log(sum)

// ----------------------------------------------------

// function sumColumn(arr){
//       let row = arr.length;
//       let column = arr[0].length;
//       let sum = 0;
//       for(let i = 0; i<column; i++){
//             for(let j = 0; j<row; j++){
//                   sum += arr[j][i] // arr[0][0], arr[1][0], arr[2][0], arr[3][0], 
//             }
//             console.log('Sum of Column'+ (i+1) ,': '+ sum);
//       }
// }

sumColumn(arr)

