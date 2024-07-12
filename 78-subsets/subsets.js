/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const exp = 2**(nums.length);
    let result = [];
    for(let i=0; i<exp; i++) {
          let ans = [];
          for(let j=0; j<nums.length; j++) {
            if((((1<<j)) & i) != 0) {
                ans.push(nums[j]);
            }
          }

          result.push(ans);
    }

    return result;

};