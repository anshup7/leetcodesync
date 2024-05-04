/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 // nums[i] = -(nums[j] + nums[k])
var threeSum = function(nums) {
    triplets = new Map();
    nums = nums.sort((a, b) => a - b);
    for(let i=0; i<=nums.length-3; i++) {
        let visitedJ = undefined;
        let visitedK = undefined;
        let j = i+1;
        let k = nums.length - 1;

        while(j < k) {
            if(visitedJ == nums[j]) {
                j++;
                continue;
            }

            if(visitedK == nums[k]) {
                k--;
                continue;
            }

            const sum = nums[i] + nums[j] + nums[k];
            if(sum === 0) {
                visitedJ = nums[j];
                visitedK = nums[k];
                triplets.set(`${nums[i]}|${nums[j]}|${nums[k]}`, true);
            } else if(sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }

    let output = [];

    for(let key of triplets.keys()) {
        output.push(key.split("|").map(val => +val));
    }

    return output;

};