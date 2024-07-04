/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    function applyModulo(number) {
       const INT_MIN = -(2n**31n);
        const INT_MAX = (2n**31n) - 1n;
        if (number < INT_MIN) return Number(INT_MIN);
        if (number > INT_MAX) return Number(INT_MAX);
        return number;
    }
    let i = 0n;
    let number = 0n;
    s = s.trim();
    let sign = 1n;
    while(s[i] === "0") {
        i++;
    }
    while( i < s.length ) {
        if((i === 0n) && (s[i] === "+" || s[i] === "-")) {
            sign = s[i] === "+" ? 1n : -1n;
        }  else {
            if(!isNaN((+s[i])) && (s[i] != " ")) {
                number = number * 10n + BigInt(+s[i]);
            } else {
                return applyModulo(number*sign)
            }
        }
        i++;
    }

    return applyModulo(number*sign);
    
};