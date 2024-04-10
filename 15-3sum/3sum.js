/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let triplets = new Map(); // Store sorted triplets as keys and do not add if same.
    nums.sort((a,b) => a-b);

    for(let i=0; i<=nums.length-3; i++) {
        let j = i+1;
        let k = nums.length - 1;
        let visitedJ = undefined;
        let visitedK = undefined;
        while(j<k) {
            if(visitedJ !== undefined && nums[j] == visitedJ) {
                j++;
                continue;
            }
            if(visitedK !== undefined && nums[k] == visitedJ) {
                k--;
                continue;
            }
            visitedJ = undefined;
            visitedK = undefined;
            const sum = nums[i]+nums[j]+nums[k];
            if(sum === 0) {
                let ar = [nums[i], nums[j], nums[k]];
                // ar.sort((a, b) => a-b); // You don't need to sort it again!
                if(!triplets.has(ar.join("|"))) {
                    triplets.set(ar.join("|"), true);
                }
              visitedJ = nums[j];
              visitedK = nums[k];
            } else if(sum > 0) {
                k--;
            } else if(sum < 0) {
                j++;
            }

            // j++;
            // k--;
        }
    }

    let result = [];
    for(const [key, value] of triplets) {
        result.push(key.split("|").map(val => +val))
    }

    return result;
};