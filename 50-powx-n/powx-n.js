/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n, mul = 1, negative=false) {
    if(n === 0) return 1;
    if(n < 0) {
        negative = true;
        n *= -1;
    }
    if(n <= 1) {
        mul *= x;
        if(negative) return 1/mul;
        return mul;
    } 

    if(n % 2 === 0) {
        x = (x * x);
        n = n / 2;
        return myPow(x, n, mul, negative);
    } 

    mul = mul * x;
    n = n - 1;
    return myPow(x, n, mul, negative);
};