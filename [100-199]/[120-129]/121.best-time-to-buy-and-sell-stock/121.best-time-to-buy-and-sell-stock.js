/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    if (prices.length === 0) return 0
    let leftMin = prices[0]
    let max = 0
    for (let i = 0; i < prices.length; i++){
        max = Math.max(prices[i] - leftMin, max)
        leftMin = Math.min(leftMin, prices[i])
    }

    return max
}

