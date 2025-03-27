/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    let i = 1;
    let comJ = 0; // The pointer on chars of first string;
    let k = 0; // Pointer on chars of the strign in question.
    let currentMatchIndex = -1;
    while( i < strs.length) {
        if(strs[i].length === 0) return "";
        while( k < strs[i].length && comJ < strs[0] .length) {
            if(strs[i][k] == strs[0][comJ]) {
                k++;
                comJ++;
            } else if(k === 0 && comJ === 0) { //means no match was found for any one of the given strings
                return "";
            } else {
                break;
            }
        }

        

        if(k > 0 && currentMatchIndex != -1 && currentMatchIndex > (k-1)) {
            currentMatchIndex = k - 1; // k - 1 is based on debugging. k was one ahead of last matched index because of line numbers 15 and 16.
        } else if( k > 0 && currentMatchIndex == -1) {
            currentMatchIndex = k - 1;
        }

        k = 0;
        comJ = 0;
        i++;
    }
    let output = "";
    let iter = 0;
    while(iter <= currentMatchIndex) {
        output += strs[0][iter++];
    }

    return output;
};