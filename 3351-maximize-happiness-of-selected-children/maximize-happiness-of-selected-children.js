/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    let dec = 0;
    happiness.sort((a,b) => b - a);
    let sum = 0;
    for(let i=0; i<k; i++) { // given that k<=n
        const netSum = (happiness[i] + dec) >= 0 ? (happiness[i] + dec) : 0;
        sum += netSum;
        dec = dec - 1;
    }
    return sum;
};