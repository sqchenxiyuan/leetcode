/*
 * @lc app=leetcode id=319 lang=javascript
 *
 * [319] Bulb Switcher
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let bulbSwitch = function(n) {
    return parseInt(Math.sqrt(n))
}
// @lc code=end

//原理
/** 
 * 每个位置是否开关，表示能整除它的自然数是否为奇数
 * 例如 1 只有1  所以是on
 * 8 有 1*8 2*4 一共4个说以是off
 * 只有当一个数字可以被一个数字的平方构成时，才能是奇数个
 * 例如9  1*9  3*3  只有这样才能是奇数
 * 所以有几个on就表示有几个是平方数，在n内有几个平方数只需要开方就行了
*/
