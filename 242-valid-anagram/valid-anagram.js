/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    for(let each of t) {
        s = s.replace(each, "");
    }

    if(s.length === 0) return true;

    return false;
};