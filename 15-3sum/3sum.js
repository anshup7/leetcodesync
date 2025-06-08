/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let tripletMap = new Map();
    let startPointer = 0;
    if(nums.length < 3) return nums;
    nums.sort((a,b) => a - b);
    let result = [];
    while(startPointer <= nums.length - 3) {
        let start = startPointer + 1;
        let end = nums.length - 1;
        while(start < end) {
            const sum = nums[startPointer] + nums[start] + nums[end];

            if(sum < 0) {
                start++;
            } else if(sum > 0) {
                end--;
            } else {
                const joined = `${nums[startPointer]},${nums[start]},${nums[end]}`;
                if(!tripletMap.has(joined)) {
                    result.push([nums[startPointer], nums[start], nums[end]]);
                    tripletMap.set(joined, true);
                }
                start++;
            }
        }
        startPointer++;
    }

    return result;
};