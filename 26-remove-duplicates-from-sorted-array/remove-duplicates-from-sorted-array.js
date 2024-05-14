/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let j = i + 1;
    let n = nums.length;
    while(j < n) {
        if(nums[i] == nums[j]) {
            j++;
        } else {
            nums[++i] = nums[j];
        }
    }

    return i+1;
};