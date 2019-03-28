/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (30.84%)
 * Total Accepted:    342.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '4'
 *
 * Implement int sqrt(int x).
 * 
 * Compute and return the square root of x, where x is guaranteed to be a
 * non-negative integer.
 * 
 * Since the return type is an integer, the decimal digits are truncated and
 * only the integer part of the result is returned.
 * 
 * Example 1:
 * 
 * 
 * Input: 4
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since 
 * the decimal part is truncated, 2 is returned.
 * 
 * 
 */
//二分法
/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function(x) {
    if (x === 0 || x === 1) return x
    if (x === 2 || x === 3) return 1
    
    let l = 2, r = parseInt(x / 2), s
    while (true){
        s = parseInt((l + r) / 2)
        if (s * s <= x && (s + 1) * (s + 1) > x) break
        if (s * s > x){
            r = s
        } else {
            l = s
        }
    }
    return s
}

// console.log(mySqrt(8))
// console.log(mySqrt(16))
// console.log(mySqrt(0))
// console.log(mySqrt(1))

