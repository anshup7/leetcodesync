/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let start = 0;
    const mapper = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(!mapper.has(nums[i])) {
            mapper.set(nums[i], i);
        }
    }

    for(let i=0; i < nums.length; i++) {
        const residue = target - nums[i];
        if(mapper.has(residue)) {
            const index = mapper.get(residue);
            if(index !== i) return [i, mapper.get(residue)];
        }
    }
};