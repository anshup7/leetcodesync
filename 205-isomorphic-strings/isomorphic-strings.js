/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    /**
        Needs to check if the length is same.
        Needs to map t character to s character
            - if t character is already mapped to s character and both chracters are ewual to current pointed chracters in the strings, then no issues.
            - If the mapped chracter is different and there is mapping already, then return false.
     */

    if(s.length !== t.length) return false;
    let mappedT = new Map();
    let mappedS = new Map();
    for(let i = 0; i < t.length; i++) {
        if(mappedT.has(t[i])) {
            const mappedChar = mappedT.get(t[i]);
            if(mappedChar !== s[i]) return false;
        } else if(mappedS.has(s[i])) {
            const mappedChar = mappedT.get(s[i]);
            if(mappedChar !== t[i]) return false;
        } else {
            mappedT.set(t[i], s[i]);
            mappedS.set(s[i], t[i]);
        }
    }

    return true;

};