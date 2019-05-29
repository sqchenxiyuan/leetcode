/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsetsWithDup = function(nums) {
    let map = new Map()
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1)
    })

    let result = [[]]

    map.forEach((count, num) => {
        let l = result.length

        for (let i = 1; i <= count; i++){
            let arr = new Array(i).fill(num)
            for (let j = 0; j < l; j++){
                result.push(result[j].concat(arr))
            }
        }
    })

    return result
}

// let x1 = subsetsWithDup([1, 2, 2])
// console.log(1)
