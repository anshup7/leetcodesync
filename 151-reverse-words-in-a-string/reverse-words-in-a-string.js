/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let rev = "";
    let i = s.length - 1;
    let added = false;
    let word = "";
    while(i >= 0) {
        if(s[i] === " ") {
            if(!added) {
                rev += word;
                rev += " ";
                word = "";
                added = true;
            }
        } else {
            word = `${s[i]}${word}`;
            added = false;
        }

        i--;
    }

    if(!added && word.length > 0) {
        rev += word;
    }

    return rev;
};