
function peakElement(arr) {
    let start = 0, end = arr.length;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        
        if (mid - 1 >= 0 && mid + 1 < arr.length && arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
        if (mid - 1 < 0 && mid+1<arr.length && arr[mid] > arr[mid + 1]) return mid;
        if (mid - 1 >= 0 && mid + 1 >= arr.length && arr[mid] > arr[mid - 1]) return mid;
  
        if (arr[mid] < arr[mid - 1]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}

console.log(peakElement([1,2,3]));
// console.log(peakElement([1,2,3,4,3]));