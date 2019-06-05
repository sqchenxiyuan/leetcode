/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
let isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length != s3.length) return false
    
    let cache = new Array(s1.length + 1).fill(0).map(_ => new Array(s3.length + 1).fill(-1))

    //s1的匹配长度,和s3已经匹配的长度
    function checkInterleave(sl1, sl3){
        if (cache[sl1][sl3] != -1) return cache[sl1][sl3]
        let result = false

        if (sl3 === s3.length) result = true
        else {
            if (s1[sl1] === s3[sl3] && checkInterleave(sl1 + 1, sl3 + 1)){
                result = true
            } else if (s2[sl3 - sl1] === s3[sl3] && checkInterleave(sl1, sl3 + 1)){
                result = true
            }
        }
        cache[sl1][sl3] = result
        return result
    }

    return checkInterleave(0, 0)
}

// console.log(isInterleave(
//     "aabcc",
//     "dbbca",
//     "aadbbcbcac"
// ))

// console.log(isInterleave(
//     "aabcc",
//     "dbbca",
//     "aadbbbaccc"
// ))

