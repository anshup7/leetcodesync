/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    // if increasing and then started decreasing
    let len = nums.length;
    let i = 0;
    while((nums[i+1] >= nums[i]) && i < (len-1)) {
        i++;
    }

    if(i >= len -1) return true; // rotated by zero positions
    let stack = [];
    while(i >= 0) {
        const val = nums.splice(i, 1);
        stack.unshift(val[0]);
        i--;
    }

    nums.push(stack);
    nums = nums.flat();
    i = 0;

    while(i < len-1) {
        if(nums[i+1] < nums[i]) return false;
        i++;
    }

    return true;
};