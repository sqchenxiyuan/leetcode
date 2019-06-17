/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    if (prices.length === 0) return 0
    let max = 0
    for (let i = 1; i < prices.length; i++){
        max = max + Math.max(prices[i] - prices[i - 1], 0)
    }

    return max
}

