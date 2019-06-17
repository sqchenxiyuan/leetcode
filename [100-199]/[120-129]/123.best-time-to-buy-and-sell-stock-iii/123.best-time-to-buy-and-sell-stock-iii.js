/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    if (prices.length === 0) return 0
    let local = new Array(prices.length + 1).fill(0).map(_ => new Array(3).fill(0)) //第i天卖出最多购买第j次的最大值
    let global = new Array(prices.length + 1).fill(0).map(_ => new Array(3).fill(0))
    for (let i = 1; i < prices.length; i++){
        let diff = prices[i] - prices[i - 1]
        for (let j = 1; j < 3; j++){
            // console.log(i, j, local[i - 1][j - 1], Math.max(diff, 0))
            local[i][j] = Math.max(global[i - 1][j - 1] + Math.max(diff, 0), local[i - 1][j] + diff)
            global[i][j] = Math.max(local[i][j], global[i - 1][j])
        }
    }

    return global[prices.length - 1][2]
}

// console.log(maxProfit([3, 2, 6, 5, 0, 3]))
// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))

