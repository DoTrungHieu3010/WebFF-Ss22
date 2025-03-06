// let salary = +prompt("Nhap so luong")
// let tax;
// if (salary < 5000000){
//     alert ("Thue la 0 VND")
// } else if (salary < 10000000 ){
//     tax = salary * 5/100
// } else if (salary < 18000000){
//     tax = salary * 10/100
// } else if (salary < 32000000){
//     tax = salary * 15/100
// } else{
//     tax = salary * 20/100
// }
// tax = tax.toLocaleString("vi-VN")
// alert (`Thue la ${tax} VND`)

let code = +prompt("Nhap ma trang thai")
switch (code){
    case 200:
        alert("Thanh cong")
    break
    case 201:
        alert("Them thanh cong")
    break
    case 400:
        alert("Loi request")
    break
    case 404:
        alert("Khong tim thay")
    break
    case 500:
        alert("Loi sever")
    break
    default:
        alert("Sai ma")
    break
}