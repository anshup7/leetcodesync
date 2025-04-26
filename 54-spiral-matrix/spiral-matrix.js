/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let movementDirection = "right";
    // Possible directions that can be moved - "right", "down", "left", "up"
    let spiralValues = [];
    let row = 0;
    let column = -1;
    let boundedLeftColumn = 0;
    let boundedRightColumn = matrix[0].length - 1;
    let boundedTopRow = 0;
    let boundedBottomRow = matrix.length - 1;
    while(boundedTopRow <= boundedBottomRow && boundedLeftColumn <= boundedRightColumn) {
        if(movementDirection === "right") {
            for(column = boundedLeftColumn; column <= boundedRightColumn; column++) {
                spiralValues.push(matrix[boundedTopRow][column])
            }
            boundedTopRow++;
            // column--;
            movementDirection = "down";
        } else if(movementDirection === "down") {
            for(row = boundedTopRow; row <= boundedBottomRow; row++) {
                spiralValues.push(matrix[row][boundedRightColumn])
            }
            boundedRightColumn--;
            // row--;
            movementDirection = "left";
        } else if(movementDirection === "left") {
            for(column = boundedRightColumn; column >= boundedLeftColumn; column--) {
                spiralValues.push(matrix[boundedBottomRow][column])
            }
            boundedBottomRow--;
            // column++;
            movementDirection = "up";
        } else if(movementDirection === "up") {
            for(row = boundedBottomRow; row >= boundedTopRow; row--) {
                spiralValues.push(matrix[row][boundedLeftColumn])
            }
            boundedLeftColumn++;
            movementDirection = "right";
        }

    }
        return spiralValues;
    /*
    * One Iteration ------------------
    * if moving right - column will increase(till bounded right column) and row constant.
    * if moving down - row will increase(till bounded row bottom) and column constant.
    * if moving left - column will decrease(till bounded left column) and row constant.
    * if moving up - row will decrease(till bounded row top) and column constant
    * --------------------------------
    * Decrease bounded right column by 1
    * Decrease bounded row bottom by 1
    * Increase bounded column left by 1
    * Increase bounded row top by 1
    * Second Iteration -----------------------------------
    * Repeat as in First Iteration
    ** The loop should go on till boundedRowTop <= boundedRowBottom (Columns will be also taken care with this condition, what I can see as of now.) 
     */
};