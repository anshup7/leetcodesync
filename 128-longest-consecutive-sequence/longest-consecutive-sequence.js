/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numsSet = new Set([]);
    let numOfConsec = 0;
    let max = 0;
    for(let each of nums) { 
        numsSet.add(each);
    }
    for(let each of nums) {
        if(numsSet.has(each - 1)) continue;

        let nextElement = each;
        numOfConsec = 1;
        while(numsSet.has(nextElement + 1)) {
            numOfConsec += 1;
            nextElement = nextElement + 1;
        }

        if(numOfConsec > max) max = numOfConsec;
    }

    return max;
};