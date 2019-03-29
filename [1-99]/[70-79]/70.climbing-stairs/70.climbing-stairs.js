/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (43.65%)
 * Total Accepted:    372.7K
 * Total Submissions: 852.5K
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * 
 */
//低效率分治
// /**
//  * @param {number} n
//  * @return {number}
//  */
// let climbStairs = function(n) {
//     let cache = {
//         0: 0,
//         1: 1,
//         2: 2,
//         3: 3
//     }

//     function getSlimbStairs(x){
//         if (cache[x] != undefined) return cache[x]
//         else {
//             cache[x] = getSlimbStairs(x - 2) + getSlimbStairs(x - 1)
//             return cache[x]
//         }
//     }

//     return getSlimbStairs(n)
// }

//斐波那契数列
/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function(n) {
    let cache = {
        0: 0,
        1: 1,
        2: 2,
    }

    if (cache[n]) return cache[n]
    let sum = 0
    for (let i = 3; i <= n; i++){
        sum = cache[i - 1] + cache[i - 2]
        cache[i] = sum
    }

    return sum
}

// console.log(climbStairs(3))
// console.log(climbStairs(4))
// console.log(climbStairs(5))
// console.log(climbStairs(20))
// console.log(climbStairs(44))

