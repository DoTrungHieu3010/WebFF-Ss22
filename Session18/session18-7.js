let num1 = +prompt("Nhap vao so a")
let num2 = +prompt("Nhap vao so b")
let choice = prompt("Nhap vao phep tinh (+,-,*,/)")
let result
switch (choice) {
    case "+" :
        result = num1 + num2
        break;
    case "-" :
        result = num1 - num2
        break;
    case "*" :
        result = num1 * num2
        break;
    case "/" :
        result = num1 / num2
        break;
    default:
        alert("Loi du lieu")
        break;
}
alert(`Ket qua cua phep tinh tren la ${result}`)