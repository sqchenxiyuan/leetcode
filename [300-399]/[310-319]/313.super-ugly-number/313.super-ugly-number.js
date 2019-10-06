/*
 * @lc app=leetcode id=313 lang=javascript
 *
 * [313] Super Ugly Number
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
let nthSuperUglyNumber = function(n, primes) {
    let val = [1]
    let idx = new Array(primes.length).fill(0)
    for (let i = 1; i < n; i++){
        let min = Infinity
        for (let j = 0; j < primes.length; j++){
            min = Math.min(min, val[idx[j]] * primes[j])
        }

        for (let j = 0; j < primes.length; j++){
            if (val[idx[j]] * primes[j] === min) idx[j]++
        }
        val[i] = min
    }

    return val[n - 1]
}
// @lc code=end

// console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]))