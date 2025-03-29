/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    haystack = haystack.replace(needle, "$");
    for(let i=0; i < haystack.length; i++) {
        if(haystack[i] == "$") {
            return i;
        }
    }

    return -1;
};