/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let posi = 0;
    let negi = 0;
    let pos = nums.filter(val => val > 0);
    let neg = nums.filter(val => val < 0);
    let placePositive = true;
    while((posi+negi) < (pos.length + neg.length)) { // since lengths are equal, one is enough
        if(placePositive) {
            nums[posi*2] = pos[posi];
            placePositive = false;
            posi++;
        } else {
            nums[negi*2 + 1] = neg[negi];
            placePositive = true;
            negi++;
        }
    }

    return nums;
};