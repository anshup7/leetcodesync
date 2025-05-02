/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let each of magazine) {
        ransomNote = ransomNote.replace(each, "");
    }

    if(ransomNote.length === 0) return true;

    return false;
};