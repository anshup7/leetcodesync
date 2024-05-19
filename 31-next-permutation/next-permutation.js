/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 1;    
    let breakpoint = -1;

    while(i >= 0) {
        if(nums[i-1] < nums[i]) {
            breakpoint = i - 1;
            break;
        }

        i--;
    }

    if(breakpoint === -1) {
        nums.sort((a,b) => a - b);
        return;
    }

    // find the number smallest greater than the breakpoint 
    i = nums.length - 1;
    while(nums[i] <= nums[breakpoint]) {
        i--;
    }

    // swap

    let temp = nums[breakpoint];
    nums[breakpoint] = nums[i];
    nums[i] = temp;

    // sort leftouts

    let toSort = nums.slice(breakpoint + 1, nums.length);
    toSort = toSort.reverse();

    nums.splice(breakpoint+1, toSort.length, ...toSort);
};