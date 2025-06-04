/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [1, ...Array(nums.length - 1).fill(1)];
    let right = [1, ...Array(nums.length - 1).fill(1)];

    for(let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    for(let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    const result = [];
    for(let i = 0; i < left.length; i++) {
        result.push(left[i] * right[i]);
    }

    return result;
};