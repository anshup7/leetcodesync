/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) return true;
    if(nums.length === 0) return false;
    let currentJumpSteps = nums[0];
    let i;
    for(i = 0; i < nums.length; i++) {
        if(currentJumpSteps < nums[i]) {
            currentJumpSteps = nums[i];
        } 

        if(currentJumpSteps <= 0) break;

        currentJumpSteps--;
    }

    if(i >= nums.length - 1) return true;

    return false;
};