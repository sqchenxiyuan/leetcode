/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (53.54%)
 * Total Accepted:    316.6K
 * Total Submissions: 587.4K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function(n) {
    let arr = []

    function getNextChoice(str, left, right){
        if (left === 0 && right === 0) return [str]
    
        if (left > 0){
            getNextChoice(str + "(", left - 1, right)
        }
    
        if (left < right){
            if (left === 0){
                arr.push(str + new Array(right).fill(")").join(""))
            } else {
                getNextChoice(str + ")", left, right - 1)
            }
        }
    }
    getNextChoice("", n, n)

    return arr
}
