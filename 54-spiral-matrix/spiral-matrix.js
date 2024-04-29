/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    let left = 0;
    let direction = "right"; // "down", "left", "top"
    let output = [];
    let visited = [];
    for(let row = 0; row < matrix.length; row++) {
        visited.push(Array(matrix[row].length).fill(false));
    }
    while((left <= right) && (top <= bottom)) {
        let continuePass = true;
        while(continuePass) {
            if(direction == "right") {
                const by = 1;
                let counter = top;
                while(counter <= right) {
                    if(!visited[top][counter]) {
                        output.push(matrix[top][counter]);
                        visited[top][counter] = true;
                    }
                    counter += by;
                }
                direction = "down";
            } 
            if (direction == "down") {
                const by = 1;
                let counter = top;
                while(counter <= bottom) {
                    if(!visited[counter][right]) {
                     output.push(matrix[counter][right]);
                     visited[counter][right] = true;
                    }
                    counter += by;
                }
                direction = "left";
            } 
            if(direction == "left") {
                const by = -1;
                let counter = right;
                while(counter >= left) {
                    if(!visited[bottom][counter]) {
                        output.push(matrix[bottom][counter]);
                        visited[bottom][counter] = true;
                    }
                    counter += by;
                }
                direction = "top";
            } 
            if(direction == "top") {
                const by = -1;
                let counter = bottom;
                while(counter >= top) {
                    if(!visited[counter][left]) {
                        output.push(matrix[counter][left]);
                        visited[counter][left] = true;
                    }
                    counter += by;
                }
                direction = "right";
                continuePass = false;
            }
        }
        left += 1;
        right -= 1;
        bottom -= 1;
        top += 1;
    }

    

    return output;
};