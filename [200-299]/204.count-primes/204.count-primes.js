/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */
/**
 * @param {number} n
 * @return {number}
 */
let countPrimes = function(n) {
    if (n < 3) return 0
    if (n < 4) return 1
    let arr = new Array(n).fill(false)
    let count = 0
    for (let i = 2; i < n; i++){
        if (arr[i] === false){
            count++
            let base = i + i
            while (base < n){
                arr[base] = true
                base = base + i
            }
        }
    }

    return count
}

// console.log(countPrimes(100))

