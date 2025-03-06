let number = prompt("Nhap so bat ky")
let half = Math.ceil(number.length / 2)
let check = 0
for (let i = 0; i < half; i++){
    if (number[i] == number[number.length - i -1]){
        check += 1
    }
}
if (check == half){
    alert("Day la so doi xung")
} else {
    alert("Day khong phai so doi xung")
}