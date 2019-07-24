/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 */
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(k, prices) {
    let len = prices.length

    if (k >= parseInt(len / 2)){
        let res = 0
        for (let i = 1; i < len; i++){
            if (prices[i] > prices[i - 1]){
                res += prices[i] - prices[i - 1]
            }
        }

        return res
    }

    let t = new Array(k + 1).fill(0).map(_ => new Array(len).fill(0))//t[i][j] j天内ｉ次交易的最大值
    for (let i = 1; i < k + 1; i++){
        let tmpMax = -prices[0]
        for (let j = 1; j < len; j++){
            t[i][j] = Math.max(t[i][j - 1], prices[j] + tmpMax)//不卖　和　卖之间的最大值
            tmpMax = Math.max(tmpMax, t[i - 1][j - 1] - prices[j])//不卖　和　买之间的最大值
        }
    }

    return t[k][len - 1]
}

// console.log(maxProfit(2, [2, 4, 1]))
// console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]))
// console.log(maxProfit(1, [1, 2]))
