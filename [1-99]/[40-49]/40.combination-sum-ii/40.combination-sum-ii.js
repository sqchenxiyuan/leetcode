/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (40.47%)
 * Total Accepted:    212K
 * Total Submissions: 517.7K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sums to target.
 * 
 * Each number in candidates may only be used once in the combination.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function(candidates, target) {
    candidates = candidates.filter(a => a <= target).sort((a, b) => a - b)

    let arr = []

    function combination(target, start, list){
        if (target < 0) return
        if (target == 0) {
            arr.push(list.slice())
            return
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue
            list.push(candidates[i])
            combination(target - candidates[i], i + 1, list)
            list.pop()
        }
    }

    combination(target, 0, [])

    return arr
}

let x = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
let x1 = combinationSum2([2, 5, 2, 1, 2], 5)
console.log(x)
console.log(x1)
