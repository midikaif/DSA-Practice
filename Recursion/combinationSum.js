
let res = [];
function combinationSum(arr, i, s, target,osf) {
    if (s === target) {
        // console.log(osf);

        res.push([...osf]);
        // console.log(...res);
        return;
    }
    if (s > target) return;
    if (i >= arr.length) return;
    s += arr[i];
    osf.push(arr[i])
    combinationSum(arr, i, s, target,osf);
    s -= arr[i];
    osf.pop();
    combinationSum(arr, i + 1, s, target,osf)
}
combinationSum([2, 3, 5], 0, 0, 8, [])
console.log(...res);