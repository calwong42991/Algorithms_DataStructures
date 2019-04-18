const exploreIsland = (grid, i, j, area) => {
    if( !(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length) || grid[i][j] === 0 ){
        return 0;
    }

    area++;

    grid[i][j] = 0;

    return  area + 
            exploreIsland(grid, i + 1, j, 0) +
            exploreIsland(grid, i - 1, j, 0) +
            exploreIsland(grid, i, j + 1, 0) +
            exploreIsland(grid, i, j - 1, 0)
}

const maxAreaOfIsland = grid => {
    let largestArea = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            largestArea = Math.max(largestArea, exploreIsland(grid, i, j, 0));
        }
    }

    return largestArea;
}

const test = [
    [1,1,0,0,0],
    [0,1,1,0,0],
    [0,0,1,0,1],
    [1,0,0,0,1],
    [0,1,0,1,1]
]

console.log(maxAreaOfIsland(test));