/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // sort it so that quadruplets are found in scending order, the algorithm's ignore condition is assisted well.
    nums.sort((a,b) => a - b);
    let sumMap = new Map();
    for(let i=0; i<nums.length-1; i++) {
        for(let j = i+1; j<nums.length; j++) {
            let k = j+1;
            let l = nums.length - 1;
            let visitedK = null;
            let visitedL = null;
            while(k < l) {
                if(visitedK === nums[k] || visitedL === nums[l]) {
                    visitedK === nums[k] ? k++ : l--;
                    continue;
                }

                let sum = nums[i] + nums[j] + nums[k] + nums[l];

                if(sum === target) {
                    visitedK = nums[k];
                    visitedL = nums[l];
                    sumMap.set(`${nums[i]}|${nums[j]}|${nums[k]}|${nums[l]}`, [
                        nums[i], nums[j], nums[k], nums[l]
                    ]);
                    k++;
                    l--;
                } else if(sum > target) {
                    l--;
                } else {
                    k++;
                }
            }
        }
    }


    let output = Array.from(sumMap.values());
    return output;
};