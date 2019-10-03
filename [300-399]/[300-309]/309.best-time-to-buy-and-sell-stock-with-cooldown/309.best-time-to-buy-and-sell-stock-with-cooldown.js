/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// let maxProfit = function(prices) {
//     let len = prices.length
    
//     let globals = new Array(len).fill(0)//第i天的最大值
//     if (len === 0 || len === 1) return 0
//     globals[-2] = 0
//     globals[-1] = 0
//     globals[0] = 0
//     globals[1] = Math.max(0, prices[1] - prices[0])
//     if (len === 2) return globals[1]

//     for (let i = 1; i < len; i++){
//         let max = globals[i - 1]
//         let price = prices[i]
//         for (let j = 0; j < i; j++){
//             max = Math.max(price - prices[j] + globals[j - 2], max)
//         }
//         globals[i] = max
//     }
//     return globals[len - 1]
// }

// let maxProfit = function(prices) {
//     let len = prices.length

//     let buy = new Array(len).fill(0) //前i天最后一天进行购买
//     let sell = new Array(len).fill(0) //前i天最后一天进行出售
//     let rest = new Array(len).fill(0) //前i天最后一天不进行操作
//     buy[-1] = -Infinity
//     sell[-1] = 0
//     sell[-2] = 0
//     rest[-1] = 0

//     for (let i = 0; i < len; i++){
//         buy[i] = Math.max(sell[i - 2] - prices[i], buy[i - 1])
//         sell[i] = Math.max(buy[i - 1] + prices[i], sell[i - 1])
//         rest[i] = Math.max(rest[i - 1], sell[i - 1], buy[i - 1])
//     }

//     return Math.max(sell[len - 1], rest[len - 1])
// }

let maxProfit = function(prices) {
    let len = prices.length

    let pre_buy = 0, buy = -Infinity, sell = 0, pre_sell = 0

    for (let i = 0; i < len; i++){
        pre_buy = buy
        buy = Math.max(pre_sell - prices[i], pre_buy)
        pre_sell = sell
        sell = Math.max(pre_buy + prices[i], pre_sell)
    }

    return sell
}

// @lc code=end
// console.log(maxProfit([1, 2, 3, 0, 2]))