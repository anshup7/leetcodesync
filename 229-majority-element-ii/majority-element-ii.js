/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length <= 2) return Array.from(new Set(nums));
    let first = null;
    let second = null;
    let counterFirst = 0;
    let counterSecond = 0;

    for(let i=0; i<nums.length; i++) {
        if(nums[i] == first) {
            counterFirst++;
        } else if(nums[i] == second) {
            counterSecond++;
        } else {
            if(counterFirst === 0) {
                if(nums[i] != second) {
                    first = nums[i];
                    counterFirst = 1
                }
            } else if(counterSecond === 0) {
                if(nums[i] != first) {
                    second = nums[i];
                    counterSecond = 1;
                }
            } else {
                counterFirst--;
                counterSecond--;
            }
        }
    }

    let result = [];
    counterFirst = 0;
    counterSecond = 0;
    const compareAgainst = Math.floor(nums.length / 3);
    for(let each of nums) {
        if(each == first) {
            counterFirst++;
        } else if(each == second) {
            counterSecond++;
        }
    }

    if(counterFirst > compareAgainst) {
        result.push(first);
    }

    if(counterSecond > compareAgainst) {
        result.push(second);
    }

    return result;
};