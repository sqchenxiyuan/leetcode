/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 *
 * https://leetcode.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (35.88%)
 * Total Accepted:    123.2K
 * Total Submissions: 340.3K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * 
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the the digits 1-9 must occur exactly once in each of the 9 3x3
 * sub-boxes of the grid.
 * 
 * 
 * Empty cells are indicated by the character '.'.
 * 
 * 
 * A sudoku puzzle...
 * 
 * 
 * ...and its solution numbers marked in red.
 * 
 * Note:
 * 
 * 
 * The given board contain only digits 1-9 and the character '.'.
 * You may assume that the given Sudoku puzzle will have a single unique
 * solution.
 * The given board size is always 9x9.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let solveSudoku = function(board) {
    let clos = new Array(9).fill(0).map(_ => new Set())
    let rows = new Array(9).fill(0).map(_ => new Set())
    let blocks = new Array(9).fill(0).map(_ => new Set())

    let nullarr = []

    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            if (board[i][j] !== "."){
                let x = parseInt(board[i][j])
                let sets = [clos[j], rows[i], blocks[parseInt(j / 3) + parseInt(i / 3) * 3]]
                sets.forEach(set => set.add(x))
            } else {
                nullarr.push(i * 9 + j)
            }
        }
    }

    //填第几个
    function solve(index){
        if (index === nullarr.length) return true

        let p = nullarr[index]
        let row = parseInt(p / 9)
        let col = p % 9
        
        if (board[row][col] === "."){
            for (let i = 1; i <= 9; i++){
                let sets = [rows[row], clos[col], blocks[parseInt(col / 3) + parseInt(row / 3) * 3]]
                if (sets.some(set => set.has(i))){
                    continue
                }
                
                board[row][col] = i + ""

                sets.forEach(set => set.add(i))
                if (solve(index + 1)){
                    return true
                } else {
                    board[row][col] = "."
                    sets.forEach(set => set.delete(i))
                }
            }
            return false
        } else {
            return solve(index + 1)
        }
    }

    solve(0)
}

// let x = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]
// solveSudoku(x)
// console.log(x)
