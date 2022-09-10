function swap(arr, chintu, mintu) {
    let temp = arr[chintu];
    arr[chintu] = arr[mintu];
    arr[mintu] = temp;
}
    
function sortZeroOne(arr) {
let chintu =0;
for(let mintu=0; mintu<arr.length; mintu++) {
    if(arr[mintu] === 0) {
        swap(arr, chintu, mintu)
        chintu++;
    }
}
}

let arr = [1, 0, 1,1,0,1,0];
sortZeroOne(arr)
console.log(arr)



// ----------------------------------------

// let arr = [0,1,0,1,1,0,1,1]
    // let n = arr.length, temp;
    // for(let i = 0; i<n; i++){
    //     if(arr[i] === 1){
    //         temp = i;
    //         for(let j = temp; j<n; j++){
    //             if(arr[j] === 0){
    //                 let swap = arr[j];
    //                 arr[j] = arr[temp];
    //                 arr[temp] = swap;
    //             }
    //         }
    //     }
    // }
    // console.log(arr)


// check first '1' and then find another '0' if you get it swap with the previous '1'

// ----------------------------------------------------------------------

// let arr = [0,0,1,1,0,0,1,1,0,1,0];
// let n = arr.length;
// let count = 0;
// for(let i = 0; i<n; i++){
//     if(arr[i] === 0){
//         count++;
//     }
// }
// for(let i = 0; i<n; i++){
//     if(i<count){
//         arr[i] = 0;
//     }
//     else
//     arr[i] = 1;
// }
// console.log(arr)