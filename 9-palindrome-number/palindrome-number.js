/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    let copy = x;
    let revNum = 0;
    while(copy > 0) {
        const digit = copy % 10;
        revNum = (revNum * 10) + digit;
        copy = Math.floor(copy / 10);
    }
    if(revNum == x) return true;
    return false;
};