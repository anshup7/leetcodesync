/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let count = 0;
    while(s[i] == " " && i >= 0) {
        i--;
    }

    while(s[i] != " " && i >= 0) {
        count++;
        i--;
    }

    return count;
};