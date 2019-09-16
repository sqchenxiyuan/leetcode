/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
let solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let i = 0, j = n
        while (i < j){
            let mid = parseInt((i + j) / 2)
            if (isBadVersion(mid)){
                j = mid
            } else {
                if (isBadVersion(mid + 1)){
                    return mid + 1
                } else {
                    i = mid + 1
                }
            }
        }
        return i
    }
}

