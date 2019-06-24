/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
let canCompleteCircuit = function(gas, cost) {
    let arr = []
    let min = 0
    let minIndex = 0
    arr[0] = 0
    for (let i = 0; i < gas.length; i++){
        arr[i + 1] = arr[i] + gas[i] - cost[i]
        if (min > arr[i + 1]){
            min = arr[i + 1]
            minIndex = i + 1
        }
    }
    if (arr[gas.length] < 0) return -1
    return minIndex % gas.length
}

