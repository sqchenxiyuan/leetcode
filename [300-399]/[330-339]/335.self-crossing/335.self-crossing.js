/*
 * @lc app=leetcode id=335 lang=javascript
 *
 * [335] Self Crossing
 */

// @lc code=start
/**
 * @param {number[]} x
 * @return {boolean}
 */
let isSelfCrossing = function(x) {
    for (let i = 3; i < x.length; i++){
        if (x[i] >= x[i - 2] 
            && x[i - 3] >= x[i - 1]){
            return true
        }
        if (i >= 4 
            && x[i - 1] === x[i - 3] 
            && x[i] >= x[i - 2] - x[i - 4]){
            return true
        }
        if (i >= 5 
            && x[i - 2] >= x[i - 4]
            && x[i - 3] >= x[i - 1] 
            && x[i] >= x[i - 2] - x[i - 4]
            && x[i - 1] >= x[i - 3] - x[i - 5]){
            return true
        }
    }
    return false
}
// @lc code=end

// console.log(isSelfCrossing([1, 1, 2, 1, 1]))
