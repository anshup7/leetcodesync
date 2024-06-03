/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangles = new Map();
    triangles.set(0, [1]);
    triangles.set(1, [1,1]);

    let output = [];

    for(let i=0; i<numRows; i++) {
        if(triangles.has(i)) {
            output.push(triangles.get(i));
            continue;
        }

        let j=0; let k = 1;
        const refAr = triangles.get(i-1);
        const thisLevel = [1]
        while(k < refAr.length) {
            thisLevel.push(refAr[j] + refAr[k]);
            j++;
            k++;
        }
        thisLevel.push(1);

        output.push([...thisLevel]);
        triangles.set(i, [...thisLevel]); 
    }

    return output;
};