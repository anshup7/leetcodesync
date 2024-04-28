/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let reversed = [];
    let start = 0;
    let word = "";
    let space = false;
    while(start <= (s.length - 1)) {
        if(s[start] == " ") {
            if(word) word = ` ${word}`;
            if(word) {
                reversed.unshift(word);
                word = "";
            }
            start++;
            continue;
        }
        
        word += s[start];
        start++;
    }
    if(word) reversed.unshift(word);
    return reversed.join("");
};