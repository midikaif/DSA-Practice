
/*
                        <------Book Allocation-------->
We are given the ‘n’ number of books arranged in sorted order. Where each book has a different number of pages.
You have to allocate books to ‘s’ count of students so that the maximum number of pages allotted to a student is
minimum.
● Each student will be allotted at least one book and in contiguous order. Find the minimum possible number and if the
assignment is not valid, return -1.


[12,34,67,90]
Case 1: S1 → 12, S2 → 34 + 67 + 90 = 191 → MAX = 191
Case 2: S1 → 12 + 34 = 46, S2 → 67 + 90 = 157 → MAX = 157
Case 3: S1 → 12 + 34+ 67 = 113, S2 → 90 → MAX = 113

The minimum value among all of the above max values is 113 → ans


*/

function canBookAllocated(books, mid, s) {
    let student = 1;
    let tillTotalPages = 0;
    for (let i = 0; i < books.length; i++){
        if (tillTotalPages + books[i] > mid) {
            student++;
            tillTotalPages = books[i];
            if (student > s) return false;
        }
        else {
            tillTotalPages += books[i];
        }
    }
    return true;
}


function minmaxValue(books, s) {
    let start = books[books.length - 1];
    let end = books.reduce((a, b) => a + b);
    let ans = start;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (canBookAllocated(books, mid, s)) {
            ans = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return ans;
}

console.log(minmaxValue([12,34,67,90], 2));