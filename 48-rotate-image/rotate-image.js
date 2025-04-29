/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 1. Transpose the matrix in-place
    // 2. Reverse elements in every row

    for(let i=0; i < matrix.length; i++) {
        for(let j=i; j < matrix[i].length; j++) {
            const sum = matrix[j][i] + matrix[i][j];
            matrix[j][i] = sum - matrix[j][i];
            matrix[i][j] = sum - matrix[i][j];
        }
    }

    let i = 0;
    let k = 0;
    let j = matrix[k].length - 1;
    while(i < matrix.length) {
        while( k < j ) {
            const sum = matrix[i][k] + matrix[i][j];
            matrix[i][k] = sum - matrix[i][k];
            matrix[i][j] = sum - matrix[i][j];
            k++;
            j--;
        }

        i++;
        if(i < matrix.length) {
            k = 0;
            j = matrix[i].length - 1;
        }
    }
};