/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
    let code = [
        ["I", "V"],
        ["X", "L"],
        ["C", "D"],
        ["M", "A"],
        ["A", "A"]
    ]

    let base = 1
    let i = 0
    let number = 0
    while (1){
        if (!code[i + 1]) break

        let reg4 = new RegExp(`${code[i][0]}${code[i][1]}`)
        let reg9 = new RegExp(`${code[i][0]}${code[i + 1][0]}`)
        let regNor = new RegExp(`${code[i][0]}+`)
        let regGt = new RegExp(`${code[i][1]}${code[i][0]}*`)

        if (reg4.test(s)){
            number = number + base * 4
            s = s.replace(reg4, "")
        } else if (reg9.test(s)){
            number = number + base * 9
            s = s.replace(reg9, "")
        } else if (regGt.test(s)){
            number = number + base * (s.match(regGt)[0].length - 1 + 5)
            s = s.replace(regGt, "")
        } else if (regNor.test(s)){
            number = number + base * s.match(regNor)[0].length
            s = s.replace(regNor, "")
        }

        i = i + 1
        base = base * 10

        if (s === ""){
            break
        }
    }

    return number
}

console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))