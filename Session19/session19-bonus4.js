let pay = +prompt("Moi ban nhap so tien phai thanh toan")
let tax, bill
if (pay > 0){
    if (pay < 500000){
        tax = pay * 5 / 100
    } else if (pay <= 1000000){
        tax = pay * 0.1
    } else if (pay > 1000000 ){
        tax = pay * 0.15
    }
    bill = pay + tax
    bill = bill.toLocaleString("vi-VN")
    pay = pay.toLocaleString("vi-VN")
    tax = tax.toLocaleString("vi-VN")
    alert(`So tien thanh toan: ${pay}\n
        So tien thue: ${tax}\n
        Tong bill: ${bill}`)
} else{
    alert("Loi du lieu")
}