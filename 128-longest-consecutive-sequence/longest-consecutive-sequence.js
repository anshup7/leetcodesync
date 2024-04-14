/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    let numsSet = new Set(nums);
    let maxCount = 1;

    for(let each of nums) {
        let countOfConsecutiveElements = 1;
        if(!numsSet.has(each-1)) { //1)
            let nextElement = each + 1;
            while(numsSet.has(nextElement)) {
                countOfConsecutiveElements++;
                nextElement += 1;
            }

            if(countOfConsecutiveElements > maxCount) {
                maxCount = countOfConsecutiveElements;
            }
        }
    }

    return maxCount;


};