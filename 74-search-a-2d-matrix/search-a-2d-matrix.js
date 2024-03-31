/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let n = matrix[0].length;
    if(n==1 && rows == 1) {
        if(matrix[0][0] == target) return true;
        return false;
    }
    let rtc = null; // Row to check
    for(let i=0; i<rows; i++) {
        if(target <= matrix[i][n-1]) {
            rtc = i;
            break;
        }
    }

    // If rtc is null, error check can be added :)

    if(rtc == null) return false;
    if(matrix[rtc][n-1] == target) return true;

    let first = 0;
    let last = n-1;
    let mid = Math.floor((first+last)/2);
    while(first <= last) {
        if(matrix[rtc][mid] == target) return true;

        if(target < matrix[rtc][mid]) {
            last = mid - 1;
        } else if(target > matrix[rtc][mid]) {
            first = mid + 1;
        }

        mid = Math.floor((first+last) / 2);
    }

    return false;

};