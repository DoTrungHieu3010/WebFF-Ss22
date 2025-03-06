let math = +prompt("Nhap diem toan")
let literature = +prompt("Nhap diem van")
let english = +prompt("Nhap diem anh")
let average = (math + literature +english) / 3
average = average.toFixed(1)
if (average < 5.0){
    alert ("Kem")
} else if (average < 7){
    alert ("Kha")
} else if (average < 9){
    alert ("Gioi")
} else{
    alert ("Xuat sac")
}