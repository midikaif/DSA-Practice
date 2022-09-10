// -----------------------------------------

// Write a program to sort an integer array with custom number as reference.
        // Sample Input:
        // 2356481790
        // 0 1 2 3 9 5 6 2 8 1 9
        // Sample Output:
        // 2 2 3 5 6 8 1 1 9 9 0


const customSort = (order, arr) => {
        const numberObj = {};
        const resArr = [];
        order.split('').map((item, index) => {
            numberObj[item] = {
                value: [],
                order: index
            };
        })
        arr.map(item => {
            numberObj[item].value.push(item);
        });
        const sortedObj = Object.values(numberObj).sort((a, b) => (a.order > b.order) ? 1 : -1);
        Object.values(sortedObj).map(item => {
            resArr.push(...item.value)
        });
        return resArr.join(' ');
    }
    
    const order = '2356481790';
    
    const arr = [1, 2, 9, 3, 1, 5, 6, 2, 8, 9, 0];
    console.log(customSort(order, arr));

// --------------------------------------------------















// let matrix = [
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ];

// // SPIRAL MATRIX
//     let m = matrix.length, n = matrix[0].length;


//     for(let i = 0; i<m; i ++){
//         for(let j = 0; j<=n-1-i; j++){
//             console.log(matrix[i][j])
//         }
//         for(let k = i+ 1; k<=m-1-i; k++){
//             console.log(matrix[k][n-1-i])
//         }
//         for(let f =n-2-i; f>=i; f--){
//             console.log(matrix[m-i-1][f])
//         }
//         for(let p = m-2-i; p>i+1; p--){
//             console.log(matrix[p][i]);
//         }
//     }








// --------------------------------------------------------------------
        // Done by me
// ------------------------------
        // let matrix = [
        //     [1,2,3],
        //     [4,5,6],
        //     [7,8,9]
        // ]

        // let j = 0;
        // let m = matrix.length;
        // let n = matrix[0].length
        // for(let i = 0; i<m; i++){
        //     if(j<n-1){
        //         for(; j<n; j++){
        //             console.log(matrix[j][i])
        //         }
        //         j-=1;
        //     }
        //     else if(j>=0){
        //         for(; j>=0; j--){
        //             console.log(matrix[j][i])
        //         }
        //         j+=1;
        //     }
        // }

// ------------------------------------------------------------------------

// --------------------------------------------------------------------------
// rotate90(matrix, 3);
// matrix.forEach((inside) => console.log(inside));



// function rotate90(matrix, n) {
//     for(let i=0;i<parseInt(n/2);i++) {
//         for(let j=i;j<n-i-1;j++) {
//             let temp = matrix[i][j];
//             matrix[i][j] =  matrix[n-j-1][i];
//             matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
//             matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
//             matrix[j][n-i-1] = temp;
//         }

//     }
// }


// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// function transpose(matrix, n) {
//     for(let i=0;i<n;i++) {
//         for(let j=i;j<n;j++) {
//             let temp = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = temp;
//         }
//     }
// }

// transpose(matrix, 3)
// matrix.forEach((inside) => console.log(inside));

// ---------------------------------------

// let matrix = [
    //     [-1,0,-1],
    //     [0,0,0],
    //     [-1,0,-1]
    // ]

    // function bombExplode(matrix, m, n) {
    //     for(let i=0;i<m;i++) {
    //         for(let j=0;j<n;j++) {
    //             if(matrix[i][j] === -1) {

    //                 if(j > 0 && matrix[i][j-1] !== -1) {
    //                     matrix[i][j-1]+=1;
    //                 }

    //                 if(j < n-1 && matrix[i][j+1] !== -1) {
    //                     matrix[i][j+1]+=1;
    //                 }

    //                 if(i > 0 && matrix[i-1][j] !== -1) {
    //                     matrix[i-1][j]+=1;
    //                 }

    //                 if(i < m-1 && matrix[i+1][j] !== -1) {
    //                     matrix[i+1][j]+=1;
    //                 }
    //             }
    //         }
    //     }
    // }


    // bombExplode(matrix, matrix.length, matrix[0].length);

    // for(let value of matrix)
    // console.log(value)

// ------------------------------------------------------------





















//    i=0, j=0    i=0, j=1     i=0, j=2
//   [a[i-1][j], a[i-1][j+1], a[i-1][j+2]]
//    i=1, j=0    i=1, j=1     i=1, j=2
//   [a[i][j], a[i][j+1], a[i][j+2]]
//    i=2, j=0    i=2, j=1     i=2, j=2
//   [a[i+1][j], a[i+1][j+1], a[i+1][j+2]]



//    i=0, j=0    i=0, j=1     i=0, j=2
//   [a[i][j], a[i][j+1], a[i][j+2]]
//    i=1, j=0    i=1, j=1     i=1, j=2
//   [a[i+1][j], a[i+1][j+1], a[i+1][j+2]]
//    i=2, j=0    i=2, j=1     i=2, j=2
//   [a[i+2][j], a[i+2][j+1], a[i+2][j+2]]

//   [-1,0,0]         [00, 01, 02]
//   [0,0,0]         [10, 11, 12]
//   [0,0,0]         [20, 21, 22]

// for(let i = 0; i<matrix.length; i++){
//     for(let j = 0; j<matrix[i].length; j++){
//         if(a[i][j] === -1){      
//             a[i-1]               
//             a[i][j+1]            
//             a[i+1][j]
// -------------------
            //a[0][0] === -1
            //a[i][j+1] = 1
            //a[i+1][j] = 1

            // [0,-1,0]
            // [0,0,0]
            // [0,0,0]
            
            //a[0][1] === -1
            //a[i][j-1] = 1
            //a[i][j+1] = 1
            //a[i+1][j] = 1

            // [0,0,-1]
            // [0,0,0]
            // [0,0,0]
            
            //a[0][2] === -1
            //a[i][j-1] = 1
            //a[i+1][j] = 1

            // [0,0,0]
            // [-1,0,0]
            // [0,0,0]
            
            //a[1][0] === -1
            //a[i-1][j] = 1
            //a[i][j+1] = 1
            //a[i+1][j] = 1
//         }
//     }
// }








// -----------------------------------------------------------------



// Check sunArray -> will check it after
    // function checkSubarray(arr) {
        
    //     let n = arr.length;
    //     let i;
    //     for(i=1;i < n && arr[i-1] < arr[i];i++) {}

    //     if(i === n) {
    //         return true;
    //     }

    //     let j = i;

    //     while(j < n && arr[j-1] >= arr[j]) {
    //         if(i > 1 && arr[i-2] > arr[j]) {
    //             return false;
    //         }
    //         j++;
    //     }
    //     if(j === n) {
    //         return true;
    //     }

    //     let k = j;
    //     if(arr[i-1] > arr[k]) {
    //         return false;
    //     }

    //     while(k < n) {
    //         if(arr[k-1] > arr[k]) {
    //             return false;
    //         }
    //         k++;
    //     }

    //     return true;

    // }

    // console.log(checkSubarray([1, 2, 5, 4, 3, 6, 7]))