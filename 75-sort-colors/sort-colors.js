/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums.length === 1) return nums;
    let colorCounts = new Map(); // will be a constant space as there will only be 0 1 and 2
    for(let each of nums) {
        if(colorCounts.has(each)) {
            const current = colorCounts.get(each);
            colorCounts.set(each, current + 1);
        } else {
            colorCounts.set(each, 1);
        }
    }
    let numsIndex = 0;
    let keys = Array.from(colorCounts.keys()).sort();
    for(let i=0; i<keys.length; i++) { // Asymptotically this big oh n only as outer loop will be at max 3(constant)
        let count = colorCounts.get(keys[i]);
        while(count > 0) {
            nums[numsIndex++] = keys[i];
            count--;
        }
    }
};