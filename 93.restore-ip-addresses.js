/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */
/**
 * @param {string} s
 * @return {string[]}
 */
let restoreIpAddresses = function(s) {
    let cache = new Array(s.length).fill(0).map(_ => new Array(5).fill(false))
    let len = s.length

    //获取start开始的字符串的3个ip块的解析
    function getIpBlock(start, count){
        if (start >= s.length) return []
        if (cache[start][count]) return cache[start][count]
        let result = []
        
        if (count === 1){
            if (len - start > 3) {
                //没有结果
            } else if (len - start === 3 && s[start] !== "1" && s[start] !== "2"){
                //没有结果
            } else if (len - start > 1 && s[start] === "0" ){
                //没有结果
            } else {
                result = [s.substr(start)] 
            }
        } else {
            //一个
            let s1 = s.substr(start, 1)
            getIpBlock(start + 1, count - 1).forEach(r => {
                result.push(s1 + "." + r)
            })

            if (s[start] !== "0"){
                //两个
                let s2 = s.substr(start, 2)
                getIpBlock(start + 2, count - 1).forEach(r => {
                    result.push(s2 + "." + r)
                })
    
                //三个
                if (s[start] === "1" || s[start] === "2"){
                    let s3 = s.substr(start, 3)
                    getIpBlock(start + 3, count - 1).forEach(r => {
                        result.push(s3 + "." + r)
                    })
                }
            }
        }

        cache[start][count] = result
        // console.log(start, count, result)
        return result
    }

    return getIpBlock(0, 4)
}

// let x = restoreIpAddresses("25525511135")
// let x1 = restoreIpAddresses("255255111135")
// let x2 = restoreIpAddresses("2552551035")
// let x3 = restoreIpAddresses("1111")
// let x4 = restoreIpAddresses("0000")
// let x5 = restoreIpAddresses("2552550255")
// let x5 = restoreIpAddresses("00256")
// console.log(213)
