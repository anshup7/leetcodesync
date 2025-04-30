/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowCols = []; // Row and column sets that need to be set as zero;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                rowCols.push([i, j]);
            }
        }
    }

    for(let each of rowCols) {
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][each[1]] = 0;
        }
        for(let i = 0; i < matrix[each[0]].length; i++) {
            matrix[each[0]][i] = 0;
        }
    }
};