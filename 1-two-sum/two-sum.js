/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    let n = nums.length;
    for (let i=0; i <n; i++){
        hash[nums[i]] = i;
    }
    
    for (let i=0; i<n; i++) {
        const leftoutVal = target - nums[i];
        if(hash[leftoutVal] && hash[leftoutVal] != i) {
            return [hash[leftoutVal], i];
        }
    }
};