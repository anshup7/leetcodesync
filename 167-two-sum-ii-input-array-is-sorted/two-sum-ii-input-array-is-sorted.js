/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while( start < end ) {
        const diff = target - (numbers[start] + numbers[end]);
        if(diff > 0) {
            start++;
        } else if(diff < 0) {
            end--;
        } else {
            return [start + 1, end + 1];
        }
    }
};