/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function(n) {
    let allDigits = [];
    let copy = n;
    while(copy > 0) {
        allDigits.push(copy % 10);
        copy = Math.floor(copy/10);
    }

    let k = allDigits.length;
    let sum = 0;
    for(const digit of allDigits) {
        sum += (digit ** k);
    }

    return sum==n;
};