let num = +prompt("Nhap so bat ki")
let result = Math.sqrt(num)
if (result % 3 == 0 || result % 3 == 1){
    alert(`${num} la so chinh phuong`)
} else if (result % 4 == 0 || result % 4 == 1){
    alert(`${num} la so chinh phuong`)
} else if (result == 1){
    alert(`${num} la so chinh phuong`)
} else {
    alert(`${num} khong la so chinh phuong`)
}