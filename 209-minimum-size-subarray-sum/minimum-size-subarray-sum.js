/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    /*
    * Since there is no sorting applied
    * Find all the subarrays where sum is greater than or equal to target.
    * Once done as above, find the subarray that has minimum length
     */

    if(nums.length < 1) return 0;
    if(nums.length === 1) {
        if(nums[0] >= target) return 1;
        return 0
    }

    let i = 0;
    let j = i;
    let sum = 0;
    let subArrayLens = [];
    while(j < nums.length) {
        sum += nums[j];
        if(sum >= target) {
            subArrayLens.push((j - i) + 1);
            while(sum >= target && (i <= j)) {
                subArrayLens.push((j-i) + 1);
                sum -= nums[i];
                i++;
            }     
        }
        j++;
    }

    let min = subArrayLens[0] || 0;
    let k = 1;
    while( k < subArrayLens.length ) {
        if(subArrayLens[k] < min) {
            min = subArrayLens[k];
        }

        k++;
    }

    return min;

};