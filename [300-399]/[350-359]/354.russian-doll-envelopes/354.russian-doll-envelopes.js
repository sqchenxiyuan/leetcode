/*
 * @lc app=leetcode id=354 lang=javascript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
let maxEnvelopes = function(envelopes) {
    //可以用二分来快速找到满足的
    let cache = []
    function getItMaxEnvelopes(index){
        if (cache[index]) return cache[index]
        let result = 0
        let currentEnvelope = envelopes[index]
        for (let i = 0; i < envelopes.length; i++){
            let e = envelopes[i]
            if (currentEnvelope[0] > e[0] && currentEnvelope[1] > e[1]){
                result = Math.max(getItMaxEnvelopes(i), result)
            }
        }
        result++
        cache[index] = result
        return result
    }

    let max = 0
    envelopes.forEach((envelope, index) => {
        max = Math.max(getItMaxEnvelopes(index), max)
    })

    return max
}
// @lc code=end

// console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]))
// console.log(maxEnvelopes([[1, 3], [3, 5], [6, 7], [6, 8], [8, 4], [9, 5]]))