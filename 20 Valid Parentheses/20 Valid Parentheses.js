let BEAFOR_CHAR = {
    "(": ")",
    "{": "}",
    "[": "]"
}

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    let stack = []
    for (let i = 0; i < s.length; i++){
        let c = s[i]
        if (BEAFOR_CHAR[c]){
            stack.push(BEAFOR_CHAR[c])
        } else {
            let rc = stack.pop()
            if (rc !== c){
                return false
            }
        }
    }

    if (stack.length === 0){
        return true
    } else {
        return false
    }
}

console.log(isValid(""))
console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))