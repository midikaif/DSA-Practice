// Rearrange an array such that 
// even positioned elements are greater than odd positioned elements

// -------------------------------
    // let arr = [1,3,4,2,5,6,7,8];
    // let n = arr.length;
    // let result = [];
    // let a = 0, b = n-1;
    // arr.sort();
    // for(let i = 0; i<n; i++){
    //     if((i+1)%2 == 0){
    //         result[i] = arr[b--];
    //     }
    //     else{
    //         result[i] = arr[a++];
    //     }
    // }

    // console.log(result);

// ----------------------------------------

// [ 1, 4, 5, 2, 7]
// [ 0, 1, 2, 3, 4]
// a[1]<a[0] {false} || a[0+1] isEvenPosition {false} -> not swap

// [ 1, 4, 5, 2, 7]
// [ 0, 1, 2, 3, 4]
// a[2]<a[1] {false} || a[1+1] isEvenPosition {true} -> Swap

// [ 1, 5, 4, 2, 7]
// [ 0, 1, 2, 3, 4]
// a[3]<a[2] {true} || a[2+1] isEvenPosition {false} -> swap

// [ 1, 5, 2, 4, 7]
// [ 0, 1, 2, 3, 4]
// a[4]<a[3] {false} || a[3+1] isEvenPosition {true} -> swap

// [ 1, 5, 2, 7, 4]
// [ 0, 1, 2, 3, 4]

// ----------------------------------------

    // let arr = [ 1, 4, 5, 2, 7];
    // let n = arr.length;
    // for(let i = 0; i<n; i++){
    //     if(arr[i+1] < arr[i] || (i)%2 !== 0 ){
    //         let swap = arr[i+1];
    //         arr[i+1] = arr[i];
    //         arr[i] = swap;
    //     }
    // }
    // console.log(arr)

// -----------------------------------

function rearrangeEvenPositioned(arr, n)
    {
        for (let i = 1; i < n; i++)
        {
            if (i % 2 === 0)
            {
                if (arr[i] > arr[i - 1])
                {
                    let temp=arr[i-1];
                    arr[i-1]=arr[i];
                    arr[i]=temp;
                }
            }
            else
            {
                if (arr[i] < arr[i - 1])
                {
                    let temp=arr[i-1];
                    arr[i-1]=arr[i];
                    arr[i]=temp;
                }
            }
        }
    console.log(arr);
    }

// ----------------------------------------------------

function rearrangeOddPositioned(arr, n)
    {
        for (let i = 1; i < n; i++)
        {
            if (i % 2 !== 0)
            {
                if (arr[i] > arr[i - 1])
                {
                    let temp=arr[i-1];
                    arr[i-1]=arr[i];
                    arr[i]=temp;
                }
            }
            else
            {
                if (arr[i] < arr[i - 1])
                {
                    let temp=arr[i-1];
                    arr[i-1]=arr[i];
                    arr[i]=temp;
                }
            }
        }
    console.log(arr);
}

let arr= [1, 4, 5, 2, 7];
let n = arr.length;
rearrangeEvenPositioned(arr, n);
rearrangeOddPositioned(arr, n);