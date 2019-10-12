/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coinChange = function(coins, amount) {
    if (amount === 0) return 0
    let cache = []//几个硬币
    for (let j = 0; j < coins.length; j++){
        cache[coins[j]] = 1
    }
    for (let i = 1; i <= amount; i++){
        if (cache[i]) continue
        let count = Infinity
        for (let j = 0; j < coins.length; j++){
            let pre = cache[i - coins[j]]
            if (pre){
                count = Math.min(count, pre + 1)
            }
        }
        if (count !== Infinity){
            cache[i] = count
        }
    }
    return cache[amount] || -1
}
// @lc code=end

// console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([1, 2, 5], 3))
// console.log(coinChange([2, 4], 3))