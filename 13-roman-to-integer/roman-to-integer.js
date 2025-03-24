/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };
    let sum = dict[s[0]];

    for(let i=1; i<s.length; i++) {
        if(dict[`${s[i-1]}${s[i]}`]) {
            sum -= dict[s[i - 1]];
            sum += dict[`${s[i-1]}${s[i]}`];
        } else {
            sum += dict[s[i]];
        }
    }

    return sum;

};