/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let i = 0;
    while(word[i] != ch && i < word.length) {
        i++;
    }

    if(i >= word.length) return word;

    let result = "";
    let j = i+1;
    while(i >= 0) {
        result += word[i--];
    }

    while(j < word.length) {
        result += word[j++];
    }

    return result;
};