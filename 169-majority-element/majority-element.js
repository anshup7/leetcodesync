/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityNum = Math.floor(nums.length / 2);

    let dict = new Map();

    for(let each of nums) {
        if(dict.has(each)) {
            dict.set(each, dict.get(each) + 1);
        } else {
            dict.set(each, 1);
        }
    }

    for(let key of dict.keys()) {
        if(dict.get(key) > majorityNum) return key;
    }

};