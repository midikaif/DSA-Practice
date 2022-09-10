function upperbound(arr, search) {
    let start = 0, end = arr.length - 1;
    let ans = arr.length;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] <= search) {
            start = mid + 1;
        }
        else {
            ans = mid;
            end = mid - 1;
        }
    }
    console.log(ans)
}

// upperbound([1, 2, 4, 6, 8, 10], 11)

function lowerbound(arr, find) {
    let start = 0, end = arr.length - 1;
    let ans = -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] >= find) {
            end = mid - 1;
        }
        else {
            ans = mid;
            start = mid + 1;
        }
    }
    console.log(ans);
}

lowerbound([1, 2, 4, 6, 8, 10], 2);