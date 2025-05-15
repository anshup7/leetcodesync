/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Sort the intervals

    intervals.sort((array1, array2) => {
        if(array1[0] < array2[0]) {
            return -1;
        } else if (array1[0] > array2[0]) {
            return 1;
        } else {
            if(array1[1] <= array2[1]) {
                return -1;
            } else if(array1[1] > array2[1]) {
                return 1
            }
        }
    });

    let ref = intervals[0];
    let result = [];
    for(let i = 1; i < intervals.length; i++) {
        if(ref[1] >= intervals[i][0]) {
            if(ref[1] < intervals[i][1]) ref[1] = intervals[i][1];
        } else {
            result.push(ref);
            ref = intervals[i];
        }
    }

    // if(ref[0] !== result[result.length - 1][0]) {
    //     result.push(ref);
    // }

    result.push(ref);

    return result;
};