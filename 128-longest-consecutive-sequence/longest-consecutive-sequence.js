/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    let numsMap = {};
    let maxCount = 1;
    for(let each of nums) {
        numsMap[each] = true;
    }


    for(let each of nums) {
        let countOfConsecutiveElements = 1;
        if(numsMap[each-1]) { //1)
            continue;
        }

        let nextElement = each + 1;
        while(numsMap[nextElement]) {
            countOfConsecutiveElements++;
            nextElement += 1;
        }

        if(countOfConsecutiveElements > maxCount) {
            maxCount = countOfConsecutiveElements;
        }

    }

    return maxCount;


};