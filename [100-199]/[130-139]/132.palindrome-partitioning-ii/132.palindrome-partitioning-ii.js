/*
 * @lc app=leetcode id=132 lang=javascript
 *
 * [132] Palindrome Partitioning II
 */
/**
 * @param {string} s
 * @return {number}
 */
let minCut = function(s) {
    let cache = new Array(s.length + 1).fill(0).map(_ => new Array(s.length + 1).map(_ => -1))

    function getSubPalindromePartitioningMinCut(start, end){
        if (start === end) return [[]]
        if (cache[start][end] > -1) return cache[start][end]

        let minCut = Infinity
        if (isPalindrome(start, end)){
            minCut = 0
        } else {
            for (let i = 1; i < end - start; i++){
                if (isPalindrome(start, start + i)){
                    minCut = Math.min(getSubPalindromePartitioningMinCut(start + i, end) + 1, minCut)
                    if (minCut === 1) break
                }
            }
        }

        cache[start][end] = minCut
        return minCut
    }

    function isPalindrome(start, end){
        end--
        while (start < end){
            if (s[start] !== s[end]) return false
            start++
            end--
        }
        return true
    }

    return getSubPalindromePartitioningMinCut(0, s.length)
}
// console.log(minCut("aba"))
// console.log(minCut("aaaab"))

