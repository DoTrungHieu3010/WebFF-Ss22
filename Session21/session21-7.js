let money = +prompt("Nhap so tien muon gui")
let percent = +prompt("Nhap so lai suat")
let time = +prompt("Nhap so thang muon gui")
let interest = 0
let totalMoney = money
let totalInterest = 0
if (money <0 || percent < 0 || time <0){
    alert ("Sai du lieu")
} else {
    for (let i = 0;i < time; i++){
        interest = totalMoney * percent / 100
        totalMoney = interest + totalMoney
        totalInterest += interest
    }
    totalMoney=totalMoney.toLocaleString("vi-VN")
    totalInterest=totalInterest.toLocaleString("vi-VN")
    alert (`So tien lai: ${totalInterest} \n Tien nhan duoc: ${totalMoney}`)
}