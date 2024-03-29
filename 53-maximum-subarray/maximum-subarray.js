/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums;
    let maxSum = 0;
    let currentSum = 0;
    let maxNegative = -Infinity;
    let allNegative = true; // assume that all numbers in the array are negative
    
    for(let i=0; i<nums.length; i++) {
        currentSum += nums[i];

        if(currentSum < 0) {
            // set current to zero, reset the subarray here.
            currentSum = 0;
        }

        if(currentSum > maxSum) {
            maxSum = currentSum;
        }

        // handle all negative numbers

        if(nums[i] < 0 && nums[i] > maxNegative) {
            maxNegative = nums[i];
        }

        if(nums[i] >= 0) {
            allNegative = false;
        }
    }

    if(allNegative) return maxNegative;
    return maxSum;
};