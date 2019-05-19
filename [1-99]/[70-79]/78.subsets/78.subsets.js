/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function(nums) {
    let results = [[]]
    for (let i = 0; i < nums.length;i++){
        let num = nums[i]
        let l = results.length
        for (let j = 0; j < l; j++){
            let a = results[j].slice()
            a.push(num)
            results.push(a)
        }
    }

    return results
}

// let x = subsets([1, 2, 3, 4])
// let x2 = subsets([1])
// console.log(123)

