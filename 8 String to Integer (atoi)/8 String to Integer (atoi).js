let myAtoi = function(str) {
    str = str.trim().match(/^[\+-]?\d*/g)[0]
    let num = Number(str + '0') / 10

    if (num > 2147483647){
        num = 2147483647
    }

    if (num < -2147483648){
        num = -2147483648
    }

    return num
}

console.log(myAtoi('010'))
