let str = prompt("Nhap chuoi ky tu bat ky")
let search = prompt("Nhap ki tu muon tim kiem")
let check = 0
for (let i=0; i < str.length; i++){
    if (str[i] == search){
        check += 1
    } else {

    }
}
if (check == 0){
    alert("Khong ton tai tu can tim kiem")
} else {
    alert("Ton tai tu can tim kiem")
}