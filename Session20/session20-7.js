let num1 = 0
let num2 = 1
let temp = num1 + num2
let num = +prompt ("Nhap so fibonacci muon hien thi")
if (num > 1 && Number.isInteger(num) == true){
    document.write(`1, 2`)
    for (let i=0; i<num - 2; i++){
        num1 = num2
        num2 = temp
        temp = num1 + num2
        document.write(`, ${temp}`)
    }
} else {
    alert("Loi du lieu")
}