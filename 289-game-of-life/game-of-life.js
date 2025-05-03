/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
   const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const neighborStatus = { 0: 0, 1: 0 };

            // Compute neighbors using bounds checks
            const positions = [
                [i, j - 1],     // leftOfColumn
                [i, j + 1],     // rightOfColumn
                [i - 1, j - 1], // topRowLeftColumn
                [i - 1, j],     // topRowSameColumn
                [i - 1, j + 1], // topRowRightColumn
                [i + 1, j - 1], // bottomRowLeftColumn
                [i + 1, j],     // bottomRowSameColumn
                [i + 1, j + 1]  // bottomRowRightColumn
            ];

            for (const [x, y] of positions) {
                if (x >= 0 && x < rows && y >= 0 && y < cols) {
                    const val = board[x][y];
                    const current = Math.abs(val); // to handle encoded state
                    neighborStatus[current] += 1;
                }
            }

            const cell = board[i][j];

            // Apply Game of Life rules with temporary markers
            if (cell === 1 && neighborStatus[1] < 2) {
                board[i][j] = -1; // dies - under-population
            } else if (cell === 1 && neighborStatus[1] > 3) {
                board[i][j] = -1; // dies - over-population
            } else if (cell === 0 && neighborStatus[1] === 3) {
                board[i][j] = 2;  // becomes live - reproduction
            }
            // else: cell survives, no change
        }
    }

    // Final pass to normalize
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === -1) board[i][j] = 0;
            else if (board[i][j] === 2) board[i][j] = 1;
        }
    }
};