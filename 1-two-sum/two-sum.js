/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let start = 0;
    const mapper = new Map();
    for(let i = 0; i < nums.length; i++) {
        const residue = target - nums[i];
        if(mapper.has(residue)) {
            const index = mapper.get(residue);
            return [mapper.get(residue), i];
        }
        mapper.set(nums[i], i);
    }
};