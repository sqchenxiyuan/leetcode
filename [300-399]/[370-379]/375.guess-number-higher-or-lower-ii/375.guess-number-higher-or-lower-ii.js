/*
 * @lc app=leetcode id=375 lang=javascript
 *
 * [375] Guess Number Higher or Lower II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let getMoneyAmount = function(n) {
    let cache = new Array(n + 1).fill(0).map(_ => new Array(n + 1).fill(-1))

    function find(start, end){
        if (start > end) return 0
        if (cache[start][end] != -1) return cache[start][end]
        let result
        if (start === end){
            result = 0
        } else if (end - start === 1) {
            result = start
        } else {
            let min = Infinity
            for (let i = start; i <= end; i++){
                let data = i + Math.max(find(start, i - 1), find(i + 1, end))
                if (start === 1 && end === n){
                    console.log("=====================================")
                    console.log(start, i, end, data)
                    // console.log(find(start, i - 1), i, find(i + 1, end))
                    // console.log(data)
                }
                min = Math.min(data, min)
            }
            result = min
        }
        cache[start][end] = result
        return result
    }

    return find(1, n)
}
// @lc code=end

// console.log(getMoneyAmount(10))
// console.log(getMoneyAmount(20))
