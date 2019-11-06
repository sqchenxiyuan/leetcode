/*
 * @lc app=leetcode id=363 lang=javascript
 *
 * [363] Max Sum of Rectangle No Larger Than K
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
let maxSumSubmatrix = function(matrix, k) {
    let m = matrix.length
    if (m === 0) return 0
    let n = matrix[0].length
    if (n === 0) return 0

    let curMax = -Infinity

    for (let i = 0; i < n; i++){
        let colCache = new Array(m).fill(0)
        for (let j = i; j < n; j++){
            
            //设置当前的列之和
            for (let x = 0; x < m; x++){
                colCache[x] += matrix[x][j]
            }

            //和
            let cache = new Array(m + 1).fill(0)
            let sum = 0
            for (let x = 0; x < m; x++){
                sum += colCache[x]
                cache[x + 1] = sum
            }

            //可以用二分查找
            for (let p = 1; p <= m; p++){
                for (let q = 0; q < p; q++){
                    let sum = cache[p] - cache[q]
                    if (sum > curMax && sum <= k){
                        curMax = sum
                        if (curMax === k){
                            return k
                        }
                    }
                }
            }
        }
    }

    return curMax
}
// @lc code=end


// console.log(maxSumSubmatrix([[1, 0, 1], [0, -2, 3]], 2))
// console.log(maxSumSubmatrix([[2, 2, -1]], 3))
