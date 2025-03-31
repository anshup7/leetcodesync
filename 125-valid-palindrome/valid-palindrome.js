/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const lower = s.toLowerCase();
    let cleanedStr = "";
    let i = 0;
    while( i < s.length ) {
        const code = lower.charCodeAt(i);
        if((code >= 48 && code <= 57) || (code >= 97 && code <= 122)) {
            cleanedStr += lower[i];
        }
        i++;
    }

    i = 0;
    let j = cleanedStr.length - 1;
    while(i < j) {
        if(cleanedStr[i] != cleanedStr[j]) return false;
        i++;
        j--;
    }

    return true;
};