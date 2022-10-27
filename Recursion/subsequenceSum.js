function subsequenceSum(arr, i, newArr, sum, k) {
    if (sum === k) { console.log(newArr);
        return;
    }
    if (sum > k) return;
    if (i === arr.length) return;
    newArr.push(arr[i]);
    subsequenceSum(arr, i + 1, newArr, sum+ arr[i], k);
    newArr.pop();
    subsequenceSum(arr, i + 1, newArr, sum, k);
}

// subsequenceSum([1, 2, 3,4,1], 0, [], 0, 2);
