/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = function(grid) {
    let m = grid.length
    if (m === 0) return 0
    let n = grid[0].length
    if (n === 0) return 0

    let points = []
    function findLand(){
        while (points.length > 0){
            let [x, y] = points.shift()
            if (x > 0 && grid[x - 1][y] === "1") pushPoint(x - 1, y)
            if (y > 0 && grid[x][y - 1] === "1") pushPoint(x, y - 1)
            if (x < m - 1 && grid[x + 1][y] === "1") pushPoint(x + 1, y)
            if (y < n - 1 && grid[x][y + 1] === "1") pushPoint(x, y + 1)
        }
    }
    function pushPoint(x, y){
        grid[x][y] = "0"
        points.push([x, y])
    }

    let count = 0
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (grid[i][j] === "1"){
                count++
                pushPoint(i, j)
                findLand()
            }
        }  
    }

    return count
}

