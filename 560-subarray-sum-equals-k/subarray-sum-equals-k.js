/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sumMap = new Map();
    let len = nums.length;
    let i = 0;
    let sum = 0;
    let count = 0;
    sumMap.set(sum, 1);
    while(i < len) {
        sum += nums[i];

        // if(nums[i] === k) count++;

        if(sumMap.has(sum-k)) {
            count += sumMap.get(sum-k);
        }

        if(!sumMap.has(sum)) {
            sumMap.set(sum, 1);
        } else {
            sumMap.set(sum, sumMap.get(sum) + 1)
        }

        

        i++;
    }

    return count;
};