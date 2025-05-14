/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    /**
        Needs to be checked for elements having difference of 1
        if the elements have difference of 1 they form the part of the range.
        The last element where the difference of 1 deviates, becomes the end of the range
     */
    if(nums.length === 0) return nums;
    
    let ranges = [];
    let startNum = nums[0];
    let prev;
    
    for(let i = 1; i < nums.length; i++) {
        prev = nums[i - 1];
        if(nums[i] - nums[i - 1] === 1) {
            continue;
        }

        if(startNum === nums[i - 1]) {
            ranges.push(`${startNum}`);
        } else {
            ranges.push(`${startNum}->${nums[i - 1]}`);
        }

        startNum = nums[i];
    }

    if(startNum === nums[nums.length - 1]) {
        ranges.push(`${startNum}`);
    } else {
        ranges.push(`${startNum}->${nums[nums.length - 1]}`);
    }

    return ranges;
};