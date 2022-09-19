let totalP = 0
function mazePath(i, j, n, m, osf) {
    if (i == n - 1 && j == m - 1) {
        console.log(osf);
        totalP += 1;
        return;
    }
    if (i >= n || j >= m) return;
    mazePath(i + 1, j, n, m, osf + "R");
    mazePath(i + 1, j + 1, n, m, osf + 'C');
    mazePath(i, j + 1, n, m, osf + "D");
}
// mazePath(0, 0, 3, 3, '');
// console.log(totalP);

function linearPath(i, n, osf) {
    if (i == n-1) {
        totalP++;
        console.log(osf);
        return
    }
    if (i > n) return;

    for (let j = 1; j <= 6; j++) {
        linearPath(i + j, n, osf+j);
    }
}
linearPath(0, 3, '');
console.log(totalP);