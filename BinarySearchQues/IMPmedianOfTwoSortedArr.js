
function medianOfTwoSortedArrays(a, b) {
    let m = a.length;
    let n = b.length;
    let start = 0, end = m;
    let maxLeftA, maxLeftB, minRightA, minRightB;
    while (start <= end) {
        let partitionA = start + Math.floor((end - start) / 2);
        let partitionB = Math.floor((m + n + 1) / 2) - partitionA;

        if (maxLeftA == 0) {
            maxLeftA = -Infinity;
        }
        else {
            maxLeftA = a[partitionA - 1];

        }

        if (maxLeftB == 0) {
            maxLeftB = -Infinity;
        }
        else {
            maxLeftB = b[partitionB - 1]; 
        }

        if (minRightA == m) {
            minRightA = Infinity
        }
        else {
            minRightA = a[partitionA];
        }

        if (minRightB == n) {
            minRightB = Infinity
        }
        else {
            minRightB = b[partitionB];
        }

        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            if ((m + n) % 2 == 0) {
                return Math.floor((Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2);
            }
            else {
                return Math.max(maxLeftA, maxLeftB);
            }
        }

        if (maxLeftA > minRightB) {
            end = partitionA - 1;
        }
        else {
            start = partitionA + 1;
        }
    }
    return -1;
}

console.log(medianOfTwoSortedArrays([7,8,12,14,15], [1,2,3,4,9,11]));
