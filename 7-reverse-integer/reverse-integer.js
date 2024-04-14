/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let copy = Math.abs(x);
    let revNum = 0;
    while(copy > 0) {
        const digit = copy % 10; // this will be starting from one's, 10's and so on.
        revNum = (revNum * 10) + digit;
        copy = Math.floor(copy / 10);
    }
    if((revNum < (-2)**31) || revNum > (2**31) - 1) return 0;
    return x < 0 ? revNum*-1 : revNum;
};