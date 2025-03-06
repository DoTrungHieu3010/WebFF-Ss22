let num = +prompt("Nhap so bat ky")
let check
if (Number.isInteger(num) == true && num > 1){
    for (let i = 2; i < num; i++){
        if (num % i == 0){
            check = 0
            break
        } else {
            check = 1
        }
    }
    if (check == 1) {
        alert("Day la so nguyen to")
    } else {
        alert("Day khong pahi so nguyen to")
    }
} else {
    alert("Loi kieu du lieu")
}