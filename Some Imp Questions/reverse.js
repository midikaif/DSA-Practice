
// ---------------------------------
// reverse
// ----------------------------------


    function reverse(arr) {
        let chintu = 0;
        let mintu = arr.length - 1;
        while(chintu < mintu) {
            swap(arr, chintu, mintu);
            chintu++;
            mintu--;
        }
    }

    function swap(arr, chintu, mintu) {
        let temp = arr[chintu];
        arr[chintu] = arr[mintu];
        arr[mintu] = temp;
    }
    arr = [1,5,3,87,3,1,-1,0];

    reverse(arr)
    
    console.log(arr)