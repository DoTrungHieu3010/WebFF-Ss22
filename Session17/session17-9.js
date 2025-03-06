let num1 = +prompt("Nhap so a")
let num2 = +prompt("Nhap so b")
let num3 = +prompt("Nhap so c")
if (num1 == 0) {
    let result = - num3 / num2
    alert(result)
} else if (num2 % 2 == 0){
    let deltaComma = ( num2 / 2 ) ** 2 - ( num1 * num2 )
    if (deltaComma > 0){
        let result1 = (-(num2 / 2) - Math.sqrt(deltaComma)) / num1
        let result2 = (-(num2 / 2) + Math.sqrt(deltaComma)) / num1
        result1 = result1.toFixed(2)
        result2 = result2.toFixed(2)
        document.write(`x1 = ${result1} `, `x2 = ${result2}`)
    } else if (deltaComma == 0){
        let result = -(num2 / 2) / num1
        document.write(`x1 = x2 = ${result}`)
    } else {
        document.write("Phuong trinh vo nghiem")
    }
} else if (num2 % 2 != 0){
    let  delta = num2 ** 2 - (4 * num1 * num3)
    if (delta > 0){
        let result1 = (-num2 - Math.sqrt(delta)) / 2 * num1
        let result2 = (-num2 + Math.sqrt(delta)) / 2 * num1
        result1 = result1.toFixed(2)
        result2 = result2.toFixed(2)
        document.write(`x1 = ${result1} `, `x2 = ${result2}`)
    } else if (delta == 0) {
        let result = -num2 / 2 * num1
        document.write(`x1 = x2 = ${result}`)
    } else {
        document.write("Phuong trinh vo nghiem")
    }
} else {

}
