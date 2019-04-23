/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (54.04%)
 * Total Accepted:    364K
 * Total Submissions: 667.6K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1] 
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
    let set = new Set()
    nums.forEach(_ => set.add(_))
    
    let result = []
    function build(arr){
        if (set.size === 0) {
            result.push(arr)
            return
        }
        let data = [...set]
        data.forEach(num => {
            set.delete(num)
            build([...arr, num])
            set.add(num)
        })
    }
    build([])
    return result
}


// let x = permute([1, 2, 3])
// console.log(x)
