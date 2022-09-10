function binarySearch(arr, find) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] == find) {
            return mid;
        }
        if (arr[mid] > find) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}

let arr = [-1, 0, 1, 2, 3, 4, 5, 6]
console.log(binarySearch(arr, -1));