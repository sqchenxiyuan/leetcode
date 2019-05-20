/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function(board, word) {
    if (word.length === 0) return true
    let m = board.length
    if (m === 0) return false
    let n = board[0].length
    if (n === 0) return false

    let points = []
    let startC = word[0]
    //寻找初始点
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (board[i][j] === startC) points.push([i, j])
        }
    }

    //深度优先
    let map = new Array(m).fill(0).map(_ => new Array(n).fill(false))
    function pathExist(i, j, charIndex){
        if (i < 0 || i >= m) return false
        if (j < 0 || j >= n) return false
        if (map[i][j]) return false
        if (word[charIndex] !== board[i][j]) return false
        if (charIndex === word.length - 1) return true

        map[i][j] = true
        if (pathExist(i - 1, j, charIndex + 1)
            || pathExist(i + 1, j, charIndex + 1)
            || pathExist(i, j - 1, charIndex + 1)
            || pathExist(i, j + 1, charIndex + 1))
            return true

        map[i][j] = false
        return false
    }

    return points.some(p => pathExist(p[0], p[1], 0))
}

// console.log(exist([
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"]
// ], "ABCCED"))

// console.log(exist([
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"]
// ], "SEE"))

// console.log(exist([
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"]
// ], "ABCB"))

// console.log(exist([
//     ["A", "A", "C", "E"]
// ], "AA"))
