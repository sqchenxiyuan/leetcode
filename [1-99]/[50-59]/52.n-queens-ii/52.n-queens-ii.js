/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */
/**
 * @param {number} n
 * @return {number}
 */
let totalNQueens = function(n) {
    let allN = n
    let rows = {} //行
    let cols = {} //列
    let lefts = {} //左倾/
    let rights = {} //右倾\

    let results = 0

    function buildN(n, stack = []){
        if (n === allN){
            results++
        }

        for (let i = 0; i < allN; i++){
            let row = n
            let col = i
            let left = col + row
            let right = col - row

            if (rows[row] || cols[col] || lefts[left] || rights[right]){
                continue
            }

            rows[row] = true
            cols[col] = true
            lefts[left] = true
            rights[right] = true

            stack.push(i)
            buildN(n + 1, stack)
            stack.pop()

            rows[row] = false
            cols[col] = false
            lefts[left] = false
            rights[right] = false
        }
    }

    buildN(0)

    return results
}

// console.log(totalNQueens(4))
// console.log(totalNQueens(5))
// console.log(totalNQueens(6))
// console.log(totalNQueens(7))
// console.log(totalNQueens(8))

