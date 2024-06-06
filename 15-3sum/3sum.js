/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let output = new Map();
    nums.sort((a,b) => a - b);
    for(let i=0; i<nums.length; i++) {
        let j = i+1;
        let k = nums.length - 1;
        let visitedJ = null;
        let visitedK = null;
        while(j < k) {
            if((nums[j] === visitedJ) || (nums[k] === visitedK)) {
                nums[j] === visitedJ ? j++ : k--;
                continue;
            }

            const sum = nums[i] + nums[j] + nums[k];

            if(sum === 0) {
                visitedJ = nums[j];
                visitedK = nums[k];
                output.set(`${nums[i]}|${nums[j]}|${nums[k]}`, [nums[i], nums[j], nums[k]]);
                j++;
                k--;
            } else if(sum < 0) {
                j++;
            } else if(sum > 0) {
                k--;
            }
        }
    }

    const values = Array.from(output.values());
    return [...values];
};