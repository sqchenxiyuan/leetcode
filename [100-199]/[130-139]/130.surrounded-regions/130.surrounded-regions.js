/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let solve = function(board) {
    let m = board.length
    if (m === 0) return
    let n = board[0].length
    if (n === 0) return

    //获取边界的O
    let boundary = [] //边界上的
    for (let i = 0; i < n; i++){
        if (board[0][i] === "O")boundary.push([0, i])
        if (board[m - 1][i] === "O")boundary.push([m - 1, i])
    }
    for (let i = 1; i < m - 1; i++){
        if (board[i][0] === "O")boundary.push([i, 0])
        if (board[i][n - 1] === "O")boundary.push([i, n - 1])
    }

    //寻找在连通到边缘O的集合
    let set = new Set()
    for (let i = 0; i < boundary.length; i++){
        let [x, y] = boundary[i]
        if (set.has(x + "-" + y)) continue
        set.add(x + "-" + y)
        if (x > 0 && board[x - 1][y] === "O") boundary.push([x - 1, y])
        if (y > 0 && board[x][y - 1] === "O") boundary.push([x, y - 1])
        if (x < m - 1 && board[x + 1][y] === "O") boundary.push([x + 1, y])
        if (y < n - 1 && board[x][y + 1] === "O") boundary.push([x, y + 1])
    }

    for (let i = 1; i < m - 1; i++){
        for (let j = 1; j < n - 1; j++){
            if (board[i][j] === "O" && !set.has(i + "-" + j)){
                board[i][j] = "X"
            }
        }
    }

}

// solve([
//     ["X", "X", "X", "X"], 
//     ["X", "O", "O", "X"], 
//     ["X", "X", "O", "X"], 
//     ["X", "O", "X", "X"]
// ])

