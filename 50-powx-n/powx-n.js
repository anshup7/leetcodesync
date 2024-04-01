/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n==0) return 1;
    let negative = n < 0 ? true : false;
    n = Math.abs(n);
    let m = 1;
    while(n > 0) {
        if(n%2 == 0) {
            x = (x*x);
            n = n/2;
        } else {
            m *= x;
            n -= 1;
        }
    }

    if(negative) return 1/m;
    return m;
};