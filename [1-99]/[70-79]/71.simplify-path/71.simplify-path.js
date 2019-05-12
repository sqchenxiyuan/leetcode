/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */
/**
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function(path) {
    let dirs = path.split("/")
    let stack = []
    dirs.forEach(dir => {
        if (dir === "." || dir === "") return
        if (dir === ".."){
            stack.pop()
            return
        }
        stack.push(dir)
    })

    return "/" + stack.join("/")
}


// console.log(simplifyPath("/home/")) // /home
// console.log(simplifyPath("/../")) // /
// console.log(simplifyPath("/home//foo/")) // /home/foo
// console.log(simplifyPath("/home/")) // /c
// console.log(simplifyPath("/a/../../b/../c//.//")) // /c
// console.log(simplifyPath("/a//b////c/d//././/..")) // /a/b/c

