/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

/*
* Approach - 
1. Find total Weight
2. Find the max load
3. Do binary search by total weight and max load.
4. with every mid, check if all the weights can be shipped.
5. Repeat the above steps
 */
var shipWithinDays = function(weights, days) {
    let maxLoad = -Infinity;
    let totalWeight = weights.reduce((acc, cur) => {
        if(cur > maxLoad) maxLoad = cur;
        return acc + cur;
    }, 0);
    let left = maxLoad;
    let right = totalWeight;

    function isFeasible(capacity) {
        let currentLoad = 0;
        let currentDays = 1;
        for(let i = 0; i < weights.length; i++) {
            if((currentLoad + weights[i]) <= capacity) {
                currentLoad += weights[i];
            } else {
                currentLoad = weights[i];
                currentDays++;
            }
        }

        return currentDays <= days;
    }
    let medianCapacity;
    while(left < right) {
        medianCapacity = Math.floor((left + right) / 2);
        if(isFeasible(medianCapacity)) {
            right = medianCapacity;
        } else  {
            left = medianCapacity + 1;
        }
    }

    return left;
};