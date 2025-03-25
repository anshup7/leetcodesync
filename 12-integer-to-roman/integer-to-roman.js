/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const integerToRoman = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };


    let converted = "";
    const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    let i = 0;
    while(num > 0) {
        let index = 0;
        while(numbers[index] <= num) {
            index++;
        }

        index -= 1;
        converted += integerToRoman[numbers[index]];
        num -= numbers[index];
    }

    return converted;
};