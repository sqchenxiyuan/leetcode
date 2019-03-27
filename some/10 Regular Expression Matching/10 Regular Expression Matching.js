// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  */
// let isMatch = function(s, p) {
//     return new RegExp(`^${p}$`).test(s)
// }

//构建状态机
// let isMatch = function(s, p) {
//     //构建有限状态机
//     let statuses = []
//     let status = {
//         ways: []
//     }
//     statuses.push(status)

//     for (let i = 0; i < p.length; i++){
//         let c = p[i]
//         if (p[i + 1] === "*"){
//             status.ways.push({
//                 limit: "",
//                 to: statuses.length
//             })

//             status = {
//                 ways: []
//             }

//             status.ways.push({
//                 limit: c,
//                 to: statuses.length
//             })

//             i++
//         } else {
//             status.ways.push({
//                 limit: c,
//                 to: statuses.length
//             })

//             status = {
//                 ways: []
//             }
//         }
//         statuses.push(status)
//     }
//     status.isEnd = true

//     return checkStr(statuses, 0, s)
// }

// function checkStr(regStatuses, status, str){
//     let regStatus = regStatuses[status]

//     let ways = regStatus.ways
//     let char = str[0]
//     for (let i = 0; i < regStatus.ways.length; i++){
//         let way = ways[i]
//         if (char && (char === way.limit || way.limit === ".")){
//             if (checkStr(regStatuses, way.to, str.slice(1))){
//                 return true
//             }
//         } else if (way.limit === ""){
//             if (checkStr(regStatuses, way.to, str)){
//                 return true
//             }
//         }
//     }

//     if (str.length === 0){
//         return regStatuses[status].isEnd || false
//     }

//     return false
// }

let isMatch = function(s, p) {
    let cache = new Array(s.length + 1)
    return dp(cache, 0, 0, s, p)
}

function dp(cache, i, j, s, p){
    if (cache[i] && cache[i][j] !== undefined){
        return cache[i][j] === true
    }
    let answer = false
    if (j === p.length){
        answer = i === s.length 
    } else {
        let currentMatch = s[i] === p[j] || s[i] && p[j] === "." || false
        if (p[j + 1] === "*"){
            answer = currentMatch && dp(cache, i + 1, j, s, p) || dp(cache, i, j + 2, s, p)
        } else {
            answer = currentMatch && dp(cache, i + 1, j + 1, s, p)
        }
    }

    cache[i] = cache[i] || new Array(p.length + 1)
    cache[i][j] = answer
    return answer
}

console.log(isMatch("a", "ab*")) //true
console.log(isMatch("aaa", "a*a")) //true
console.log(isMatch("aaa", "aaaa")) //false
console.log(isMatch("aa", ".*c")) //false
console.log(isMatch("aa", "a")) //false
console.log(isMatch("aa", "a*")) //true
console.log(isMatch("", "c*c*"))//true
console.log(isMatch("ab", ".*"))//true
console.log(isMatch("aab", "c*a*b"))//true
console.log(isMatch("mississippi", "mis*is*p*."))//false