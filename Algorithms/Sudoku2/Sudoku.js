function sudoku2(grid) {
    let gridCheck = [0, 3, 6];

    for (let i = 0; i < grid.length; i++) {
        if (!rowChecker(grid, i, 0)) {
            console.log('rowChecker')
            return false;
        }

        for (let j = 0; j < grid[i].length; j++) {
            if (!columnChecker(grid, 0, j)) {
                console.log('columnChecker')
                return false;
            }
            if (gridCheck.indexOf(i) >= 0 && gridCheck.indexOf(j) >= 0) {
                if (!gridChecker(grid, i, j)) {
                    return false;
                }
            }
        }
    }

    return true;
}


const gridChecker = (grid, y, x) => {

    let hash = {};
    let limitY = y + 3;
    let limitX = x + 3;

    for (let i = y; i < limitY; i++) {
        for (let j = x; j < limitX; j++) {
            if (!isNaN(Number(grid[i][j]))) {
                if (hash.hasOwnProperty(grid[i][j])) {
                    return false;
                } else {
                    hash[grid[i][j]] = true;
                }
            }
        }
    }

    return true;
};

const columnChecker = (grid, y, x) => {
    let hash = {};

    while (y < 9) {
        if (!isNaN(Number(grid[y][x]))) {
            if (hash.hasOwnProperty(grid[y][x])) {
                return false;
            } else {
                hash[grid[y][x]] = true;
            }
        }
        y++;
    }
    return true;
};

const rowChecker = (grid, y, x) => {
    let hash = {};

    while (x < 9) {
        if (!isNaN(Number(grid[y][x]))) {
            if (hash.hasOwnProperty(grid[y][x])) {
                return false;
            } else {
                hash[grid[y][x]] = true;
            }
        }
        x++;
    }
    return true;
};

const grid1 = [
    ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
    ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
    ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
    ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
    ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '7', '.']
]



const grid2 = [
    ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
    ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
    ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
    ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
    ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
    ['.', '2', '.', '.', '3', '.', '.', '.', '.']
]

const grid3 = [
    [".", "4", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "1", ".", ".", "7", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "3", ".", ".", ".", "6", "."],
    [".", ".", ".", ".", ".", "6", ".", "9", "."],
    [".", ".", ".", ".", "1", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "8", ".", ".", ".", ".", "."]
]

const grid4 = [
    [".", ".", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "8", ".", ".", ".", "3", "."],
    [".", "5", ".", ".", "2", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "4", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "7"],
    [".", "1", ".", ".", ".", ".", ".", ".", "."],
    ["2", "4", ".", ".", ".", ".", "9", ".", "."]
]

console.log(sudoku2(grid1)); // true
console.log(sudoku2(grid2)); // false
console.log(sudoku2(grid3)); // false
console.log(sudoku2(grid4)); // false

//console.log(columnChecker(grid2, 0, 0));
//console.log(rowChecker(grid2, 0, 0));
//console.log(gridChecker(grid2, 0, 0));
//console.log(gridChecker(grid4, 0, 0));