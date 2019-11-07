/*
 * @lc app=leetcode id=365 lang=javascript
 *
 * [365] Water and Jug Problem
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */

/**
 * 裴蜀定理
 * ax + by = d
 * 有整数解时当且仅当m是a及b的最大公约数d的倍数。
 */
let canMeasureWater = function(x, y, z) {
    function gcd(x, y){
        return y === 0 ? x : gcd(y, x % y)
    }

    return z === 0 || x + y >= z && z % gcd(x, y) === 0
}
// @lc code=end

