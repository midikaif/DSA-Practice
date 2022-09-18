
// longest consecutive sequence

function longestConsecutiveSeq(arr) {
    let freq = {};
    let ans = 1;
    for (let i = 0; i < arr.length; i++) {
        if (!freq[arr[i]]) freq[arr[i]] = 1;
        else freq[arr[i]]++;
    }
    // let len = 0;
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i] - 1]) continue;
        let el = arr[i];
        let len = 0;
        // len++;
        while (freq[el]) {
            el++;
            len++;
        }
        if (len > ans) ans = len;
    }
    console.log(ans);
}
longestConsecutiveSeq([100,4,200,1,3,2])
