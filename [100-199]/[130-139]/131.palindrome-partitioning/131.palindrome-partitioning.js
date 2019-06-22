/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
let partition = function(s) {
    
    let cache = new Array(s.length + 1).fill(0).map(_ => new Array(s.length + 1))

    function getSubPalindromePartitioning(start, end){
        if (start === end) return [[]]
        if (cache[start][end]) return cache[start][end]

        let arr = []
        for (let i = 1; i <= end - start; i++){
            if (isPalindrome(start, start + i)){
                let ss = s.substring(start, start + i)
                let sub = getSubPalindromePartitioning(start + i, end)
                sub.forEach(path => {
                    let p = path.slice()
                    p.unshift(ss)
                    arr.push(p)
                })
            }
        }

        cache[start][end] = arr
        return arr
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


    return getSubPalindromePartitioning(0, s.length)
}

// let x = partition("ababababababababbababaaababab")
// console.log(x)
