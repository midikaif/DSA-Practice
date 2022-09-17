/**
 *      [
 *       [1, 1, 1],
 *       [1, 0, 1],
 *       [1, 1, 1]
 *                ]
 */

// matrix[i][pos]

function settingLessThanZero(matrix, posC, posR) {
    let i = 0;

    while (matrix[i] != undefined) {
        matrix[i][posR] = -1;
        i++;
    }
    i = 0;
    while (matrix[0][i] != undefined) {
        if(matrix[posC][i] != 0)
        matrix[posC][i] = -1;
        i++;
    }

}




function setMatrixZero(matrix) {
    let row = matrix.length, col = matrix[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == 0) settingLessThanZero(matrix, i,j);
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == -1) matrix[i][j] = 0;
        }
    }

}

// let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
// let matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
let matrix = [[0,1]];
setMatrixZero(matrix)
console.log(...matrix);