/*
 * @lc app=leetcode id=164 lang=javascript
 *
 * [164] Maximum Gap
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let maximumGap = function(nums) {
    let max = -Infinity
    let min = Infinity
    for (let i = 0; i < nums.length; i++){
        max = Math.max(nums[i], max)
        min = Math.min(nums[i], min)
    }
    if (max <= min) return 0 //最大和最小差距为0

    //当完全平均时才可能一个
    let buketSize = parseInt((max - min) / nums.length) + 1 //桶的大小
    let buketNum = parseInt((max - min) / buketSize) + 1
    let buketsMin = new Array(buketNum).fill(Infinity)
    let buketsMax = new Array(buketNum).fill(-Infinity)

    for (let i = 0; i < nums.length; i++){
        let num = nums[i]
        let buketIdx = parseInt((nums[i] - min) / buketSize)
        buketsMin[buketIdx] = Math.min(buketsMin[buketIdx], num)
        buketsMax[buketIdx] = Math.max(buketsMax[buketIdx], num)
    }

    let bigGap = 0
    let lastBuketIndex = 0
    for (let i = 1; i < buketNum; i++){
        if (buketsMin[i] === Infinity) continue
        bigGap = Math.max(bigGap, buketsMin[i] - buketsMax[lastBuketIndex])
        lastBuketIndex = i
    }

    return bigGap
}
// console.log(maximumGap([3, 6, 9, 1]))
// console.log(maximumGap([3]))

