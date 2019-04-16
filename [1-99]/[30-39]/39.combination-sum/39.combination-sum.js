/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (47.32%)
 * Total Accepted:    325K
 * Total Submissions: 681.8K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 * 
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
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
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let arr = []
    candidates.forEach((candidate, index) => {
        let x = target - candidate
        if(x > 0){
            let nextCandidates = candidates.slice(index)
            let res = combinationSum(nextCandidates, x)
            res.forEach(r => r.unshift(candidate))
            arr = arr.concat(res)
        } else if(x === 0) {
            arr.push([candidate])
        }
    })
    return arr
};

// let x1 = combinationSum([2,3,6,7], 7)
// let x2 = combinationSum([2,3,5], 8)
// console.log(x1)

