/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function(num) {
    let code = [
        ["I", "V"],
        ["X", "L"],
        ["C", "D"],
        ["M", "A"]
    ]

    let numarr = Array.from(num.toString(10)).map(str => str.charCodeAt(0) - 48).reverse()
    let str = numarr.map((num, index) => {
        let str = ""
        if (num === 4){
            str = `${str}${code[index][0]}${code[index][1]}`
        } else if (num === 9){
            str = `${str}${code[index][0]}${code[index + 1][0]}`
        } else {
            if (num >= 5){
                str = `${str}${code[index][1]}`
                num = num - 5
            }
            str = `${str}${(new Array(num)).fill(code[index][0]).join("")}`
        }
        return str
    }).reverse().join("")
    return str
}

console.log(intToRoman(3))
console.log(intToRoman(4))
console.log(intToRoman(9))
console.log(intToRoman(58))
console.log(intToRoman(1994))