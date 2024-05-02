/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let negSet =  new Set([]);
    let max = 0;
    for(let each of nums) {
        if(each < 0) {
            negSet.add(each);
        }
    }

    for(let each of nums) {
        if(each > 0 && each > max) {
            if(negSet.has(each * -1)) {
                max = each;
            }
        }
    }

    if(max === 0) return -1;

    return max;
};