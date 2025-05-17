/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = [...intervals];
    let i = 0;
    let mergedResult = [];
    for(; i < result.length; i++) {
        if(result[i][0] >= newInterval[0]) {
            result.splice(i, 0, ...[newInterval]);
            break;
        }
    }

    if (i >= result.length) {
        result.push(newInterval);
        i = i - 1;
    }

    // Merge after insertion - No sorting needed as the array is already sorted.
    let ref = result[0];
    for(let j = 1; j < result.length; j++) {
        if(ref[1] >= result[j][0]) {
            if(result[j][1] > ref[1]) {
                ref[1] = result[j][1];
            }
        } else {
            mergedResult.push(ref);
            ref = result[j];
        }
    }

    mergedResult.push(ref);

    return mergedResult;
};