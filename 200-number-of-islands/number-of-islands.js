/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // Create the visited Array ,  2d - space complexity mxn
    let visited = new Array(grid.length).fill([]);
    for(let i=0; i<grid.length; i++) {
        visited[i] = new Array(grid[i].length).fill(false);
        for(let j=0; j<grid[i].length; j++) {
            if(grid[i][j] == '0') {
                visited[i][j] = 'w';
            }
        }
    }

    let islands = 0;

    // iterate on every row and then explore all possibilities

    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
            if((!visited[i][j]) && (visited[i][j] != 'w')) {
                islands++;
                explore(i,j, grid.length, grid[i].length);
            }

            function explore(row, col, rowLen, colLen) {
                if(row < 0 || col < 0) return;
                if((row > (rowLen - 1)) || (col > (colLen - 1))) return;

                if(visited[row][col]) return;

                if(grid[row][col] == '0') {
                    visited[row][col] = 'w';
                    return;
                }

                visited[row][col] = true;

                explore(row-1, col, rowLen, colLen);
                explore(row, col-1, rowLen, colLen);
                explore(row, col+1, rowLen, colLen);
                explore(row+1, col, rowLen, colLen);
            } 
        }
    }

    return islands;
};