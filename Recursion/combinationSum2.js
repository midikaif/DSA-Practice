let res=[]
function combinationSum2(arr, idx, target, osf){
    if(target===0){
        res.push([...osf])
        return;
    }
    if(target<=0) return;
    let prev=-1
    for(let i = idx; i<arr.length; i++){
        if(prev === arr[i]) continue;
        osf.push(arr[i]);
        combinationSum2(arr,i+1, target-arr[i], osf);
        osf.pop();
        prev=arr[i]
    }
}
let arr = [1, 2, 1, 1, 2];
arr.sort((a, b) => a - b);
combinationSum2(arr, 0, 2, []);
console.log(...res);