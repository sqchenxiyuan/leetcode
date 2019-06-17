/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
let minimumTotal = function(triangle) {
    let l = triangle.length
    if (l === 0) return 0
    let arr = triangle[l - 1].slice()
    for (let i = l - 1; i >= 1; i--){
        let narr = []
        for (let j = 0; j < i; j++){
            narr[j] = Math.min(arr[j], arr[j + 1]) + triangle[i - 1][j]
        }
        arr = narr
    }

    return arr[0]
}

