/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = new Array(nums.length).fill(1); // For left multiplication excluding the nums i
    let right = new Array(nums.length).fill(1); // For right multiplication, excluding the nums i

    for(let i=1; i < nums.length; i++) { // Finding multiplication from left to right excluding the current index
        left[i] = left[i-1] * nums[i-1];
    }

    for(let i=(nums.length) - 2; i >= 0; i--) { // Finding multiplication from right to left excluding the current index.
        right[i] = right[i+1] * nums[i+1];
    }

    for(let i=0; i<left.length; i++) { // Any index in left excludes current element and similar in right. 
        right[i] = left[i] * right[i]; // Multiplying these two arrays will give the multiplication from left and
        // Right excluding the element which is present at the current index.
    }

    return right;
};