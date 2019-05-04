/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
let generateMatrix = function(n) {
    let martix = new Array(n).fill(0).map(_ => new Array())
    let num = 1
    let top = 0, bottom = n - 1, left = 0, right = n - 1

    while (true){
        if (top > bottom || left > right) break

        for (let i = left; i <= right; i++){
            martix[top][i] = num++
        }

        for (let i = top + 1; i < bottom; i++){
            martix[i][right] = num++
        }

        if (top !== bottom){
            for (let i = right; i >= left; i--){
                martix[bottom][i] = num++
            }
        }

        if (left !== right){
            for (let i = bottom - 1; i > top; i--){
                martix[i][left] = num++
            }
        }

        left++
        right--
        top++
        bottom--
    }

    return martix
}

// let x = generateMatrix(1)
// let x1 = generateMatrix(2)
// let x2 = generateMatrix(3)
// let x3 = generateMatrix(4)

// console.log(213)
