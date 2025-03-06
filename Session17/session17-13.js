let money = +prompt ("Nhap so tin ban muon gui")
let time = +prompt("Nhap so thang ban muon gui")
for (let i = 0; i < time ; i++){
    ecoMoney = money * ((43/1000)/12) 
    money = ecoMoney + money 
}
money = money.toLocaleString("vi-VN")
alert(money)