/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    s = s.replaceAll(" ", "").toLowerCase();
    let newS = "";
    for(let i=0; i<s.length; i++) {
        if(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
            newS += s[i];
        } else if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
            newS += s[i];
        }
    }
    s = newS;

    let ar = s.split("");
    reverse(0, ar.length - 1);
    return ar.join("") == s;

    function reverse(i, j) {
        if(j<i) return;

        temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
        i++;
        j--;
        reverse(i,j);
    }
};