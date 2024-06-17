/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // sort the intervals with the start of the range
    intervals.sort((a,b) => a[0] - b[0]);
    let n = intervals.length;
    let i = 0;
    let j = i+1;
    let newIntervals = [];
    while((i<j) && (j < intervals.length)) {
        if((intervals[j][0] <= intervals[i][1]) 
        && (intervals[i][1] >= intervals[j][1])) {
            intervals[j] = [intervals[i][0], intervals[i][1]];
            intervals.splice(i, 1);
        } else if(
            (intervals[j][0] <= intervals[i][1]) &&
            (intervals[j][1] >= intervals[i][1])
        ) {
            intervals[j] = [intervals[i][0], intervals[j][1]];
            intervals.splice(i, 1);
        } else {
            i = i+1;
            j = j+1;
        }

        
    }

    return intervals;
};