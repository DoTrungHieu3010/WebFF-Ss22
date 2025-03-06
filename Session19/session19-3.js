let choice = +prompt(`Chuong trinh doi tien \n 1.VND -> USD \n 2.USD -> VND`)
let VND
let USD
if (choice == 1) {
    VND = +prompt("Moi ban nhap so tien muon doi")
    if (VND > 0) {
        USD = VND / 23000
        USD = USD.toFixed(1)
        alert(`${USD} USD`)
    } else {
        alert("Sai du lieu")
    }
} else if (choice == 2) {
    USD = +prompt("Moi ban nhap so tien muon doi")
    if (USD > 0) {
        VND = USD * 23000
        VND = VND.toLocaleString("vi-VN")
        alert(`${VND} VND`)
    } else {
        alert("Sai du lieu")
    }
} else {
    alert("Lua chon khong hop le")
}
