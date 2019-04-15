/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 *
 * https://leetcode.com/problems/valid-sudoku/description/
 *
 * algorithms
 * Medium (42.13%)
 * Total Accepted:    225.8K
 * Total Submissions: 531.7K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
 * validated according to the following rules:
 * 
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without
 * repetition.
 * 
 * 
 * 
 * A partially filled sudoku which is valid.
 * 
 * The Sudoku board could be partially filled, where empty cells are filled
 * with the character '.'.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠ ["5","3",".",".","7",".",".",".","."],
 * ⁠ ["6",".",".","1","9","5",".",".","."],
 * ⁠ [".","9","8",".",".",".",".","6","."],
 * ⁠ ["8",".",".",".","6",".",".",".","3"],
 * ⁠ ["4",".",".","8",".","3",".",".","1"],
 * ⁠ ["7",".",".",".","2",".",".",".","6"],
 * ⁠ [".","6",".",".",".",".","2","8","."],
 * ⁠ [".",".",".","4","1","9",".",".","5"],
 * ⁠ [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * [
 * ["8","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner
 * being 
 * ⁠   modified to 8. Since there are two 8's in the top left 3x3 sub-box, it
 * is invalid.
 * 
 * 
 * Note:
 * 
 * 
 * A Sudoku board (partially filled) could be valid but is not necessarily
 * solvable.
 * Only the filled cells need to be validated according to the mentioned
 * rules.
 * The given board contain only digits 1-9 and the character '.'.
 * The given board size is always 9x9.
 * 
 * 
 */
//边读取边检测
/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function(board) {
    let clos = new Array(9).fill(0).map(_ => new Set())
    let rows = new Array(9).fill(0).map(_ => new Set())
    let blocks = new Array(9).fill(0).map(_ => new Set())

    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            if (board[i][j] !== "."){
                let x = parseInt(board[i][j])
                if (x < 1 || x > 9) return false

                let sets = [clos[i], rows[j], blocks[parseInt(i / 3) + parseInt(j / 3) * 3]]
                if (sets.some(set => set.has(x))){
                    return false
                }
                sets.forEach(set => set.add(x))
            }
        }
    }

    return true
}


//各个集合进行检测
// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// let isValidSudoku = function(board) {
    
//     let newBoard = new Array(9).fill(0).map(_ => new Array(9).fill(0))
//     for (let i = 0; i < 9; i++){
//         for (let j = 0; j < 9; j++){
//             if (board[i][j] === "."){
//                 newBoard[i][j] = null
//             } else {
//                 newBoard[i][j] = parseInt(board[i][j])
//             }
//         }
//     }

//     //检测是否符合要求
//     function isValid(arr){
//         let set = new Set()
//         for (let i = 0; i < arr.length; i++){
//             let x = arr[i]
//             if (x !== null){
//                 if (x < 1 || x > 9) return false
//                 if (set.has(x)) return false
//                 set.add(x)
//             }
//         }
//         return true
//     }

//     //行
//     for (let i = 0; i < 9; i++){
//         if (!isValid(newBoard[i])) return false
//     }

//     //列
//     for (let i = 0; i < 9; i++){
//         let arr = []
//         for (let j = 0; j < 9; j++){
//             arr.push(newBoard[j][i])
//         }
//         if (!isValid(arr)) return false
//     }

//     //九格
//     let nineBlocks = new Array(9).fill(0).map(_ => new Array())
//     for (let i = 0; i < 9; i++){
//         for (let j = 0; j < 9; j++){
//             nineBlocks[parseInt(i / 3) + parseInt(j / 3) * 3].push(newBoard[i][j])
//         }
//     }
//     for (let i = 0; i < 9; i++){
//         if (!isValid(nineBlocks[i])) return false
//     }


//     return true
// }

// let x = isValidSudoku([
//     ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ])
// console.log(x)

// let y = isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ])
// console.log(y)

// let y2 = isValidSudoku([
//     ["5", "3", "3", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ])
// console.log(y2)

