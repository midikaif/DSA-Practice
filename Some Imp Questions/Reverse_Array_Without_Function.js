// Reverse Array

    // let arr = [1, 2, 3, 4, 5];
    // let n = arr.length; // 5
    // for (let i = 0; i < parseInt(n / 2); i++) { // i<2, will run 2 times
    //     let swap = arr[n - (i + 1)]; // swap = arr[4] -> swap = 5
    //     arr[n - (i + 1)] = arr[i]; // arr[4] = arr[0] -> arr[4] = 1
    //     arr[i] = swap; // arr[0] = swap, that is 5
    // }
    // console.log(arr)

// ------------------------------

// With Recursion

    // let reverseArray = (arr,start,end) => {
    //     if(start >= end)
    //     return;
    //     let swap = arr[start];
    //     arr[start] = arr[end];
    //     arr[end] = swap;
    //     reverseArray(arr, start+1, end-1);
    // }
    // let arr = [1, 2, 3, 4, 5];
    // let start = 0, end = arr.length - 1;
    // reverseArray(arr, start, end);
    // console.log(arr)