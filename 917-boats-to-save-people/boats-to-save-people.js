/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let countOfBoat = 0;
    people = people.sort((a,b) => a - b);
    let start = 0;
    let end = people.length - 1;

    while(start <= end) {
        if(people[start] + people[end] <= limit) {
            start++;
            end--;
        } else {
            end--;
        }

        countOfBoat++;
    }

    return countOfBoat;
};