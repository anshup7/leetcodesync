/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = 0;
    let maxNegative = -Infinity;
    let maxSum  = 0;
    let hasNegativeOnly = true;
    for(let each of nums) {
        currentSum += each;

        if(currentSum < 0) {
            currentSum = 0;
        }

        if(currentSum > maxSum) {
            maxSum = currentSum;
        }

        if(each > maxNegative && each < 0) {
            maxNegative = each;
        }

        if(each >= 0) hasNegativeOnly = false;
    }

    if(hasNegativeOnly) return maxNegative;

    return maxSum;
};