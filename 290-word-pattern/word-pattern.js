/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    if(pattern.length != s.split(" ").length) return false;
    let splitted = s.split(" ");
    let mapWord = new Map();
    let mapLetter = new Map();


    for(let i = 0; i < splitted.length; i++) {
        // const letterWord = mapLetter.get(pattern[i]);
        // if(letterWord && (letterWord != splitted[i])) {
        //     return false;
        // } else if(!letterWord) {
        //     mapLetter.set(pattern[i], splitted[i]);
        // }
        if(mapWord.has(splitted[i])) {
            const letter = mapWord.get(splitted[i]);
           if(letter != pattern[i]) {
            return false;
           }
        } else {
            if(mapLetter.has(pattern[i])) {
                const word = mapLetter.get(pattern[i]);
                if(word != splitted[i]) return false;
            } else {
                mapWord.set(splitted[i], pattern[i]);
                mapLetter.set(pattern[i], splitted[i]);
            }
        }
    }

    return true;
};