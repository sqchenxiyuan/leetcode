/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
let compareVersion = function(version1, version2) {
    let versionNumbers1 = version1.split(".").map(_ => parseInt(_))
    let versionNumbers2 = version2.split(".").map(_ => parseInt(_))
    if (versionNumbers1.length > versionNumbers2.length){
        versionNumbers2 = versionNumbers2.concat(new Array(versionNumbers1.length - versionNumbers2.length).fill(0))
    } else if (versionNumbers1.length < versionNumbers2.length){
        versionNumbers1 = versionNumbers1.concat(new Array(versionNumbers2.length - versionNumbers1.length).fill(0))
    }

    for (let i = 0; i < versionNumbers1.length; i++){
        if (versionNumbers1[i] === versionNumbers2[i]) continue
        else if (versionNumbers1[i] > versionNumbers2[i]) return 1
        else return -1
    }

    return 0
}

// console.log(compareVersion("0.1", "1.1"))
// console.log(compareVersion("1.0.11", "1"))
// console.log(compareVersion("7.5.2.4", "7.5.3"))
// console.log(compareVersion("1.01", "1.001"))
// console.log(compareVersion("1.0", "1.0.0"))
// console.log(compareVersion("1", "1.1"))

