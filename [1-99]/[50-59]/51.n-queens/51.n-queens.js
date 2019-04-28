/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
let solveNQueens = function(n) {
    let allN = n
    let rows = {} //行
    let cols = {} //列
    let lefts = {} //左倾/
    let rights = {} //右倾\

    let results = []

    function buildN(n, stack = []){
        if (n === allN){
            let result = []
            for (let i = 0; i < allN; i++){
                let line = new Array(allN).fill(".")
                line[stack[i]] = "Q"
                result.push(line.join(""))
            }
            results.push(result)
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

// let x = solveNQueens(4)
// console.log(x)
