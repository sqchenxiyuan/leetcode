/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let combinationSum3 = function(k, n) {
    
    let results = []
    let arr = []
    function find(k, n, num){
        if (k === 1){
            if (num <= n && n <= 9){
                results.push(arr.slice().concat([n]))
            }
            return
        }

        for (let i = num; i <= 9; i++){
            arr.push(i)
            find(k - 1, n - i, i + 1)
            arr.pop()
            find()
        }
    }

    find(k, n, 1)

    return results
}

// let x1 = combinationSum3(3, 7)
// let x2 = combinationSum3(3, 9)
// console.log(123)
