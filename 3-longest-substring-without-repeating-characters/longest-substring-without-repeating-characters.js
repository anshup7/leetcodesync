/**
 * The Idea is, the moment the character repeats, substring until that character repetition is now not usable and thus
 * use the sliding window to decrease the window till that repetetion is removed. Once the repetetion is removed,
 * the window is ready to be increased more with more characters which are unique and thus form the substring.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seen = new Map();
    let start = 0;
    let end = start;
    let maxLen = 0;
    while(end < s.length) {
        seen.set(s[end], (seen.get(s[end]) || 0) + 1);
        while(seen.get(s[end]) > 1) {
            seen.set(s[start], seen.get(s[start]) - 1);
            start++;
        }

        const currentLen = ( end - start ) + 1;
        if(currentLen > maxLen) {
            maxLen = currentLen;
        }

        end++;

    }

    return maxLen;
};