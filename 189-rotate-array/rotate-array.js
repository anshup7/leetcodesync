/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let numsLen = nums.length;
    k = k % numsLen;
    let i = (numsLen - k) - 1;
    let j = numsLen - 1;
    let copy = 0;
    let rotated = [];
    while(copy < k) {
        rotated.push(nums[(numsLen) - k + copy])
        copy++;
    }

    while(i >= 0) {
        nums[j] = nums[i];
        i--;
        j--;
    }

    i = 0;
    while(i < k) {
        nums[i] = rotated[i];
        i++;
    }

    return nums;
};