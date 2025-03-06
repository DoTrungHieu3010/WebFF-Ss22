let math = +prompt("Nhap diem toan")
let literature = +prompt("Nhap diem van")
let english = +prompt("Nhap diem anh")
let average = (math + literature +english) / 3
average = average.toFixed(1)
if (average < 5.0){
    alert ("Yeu")
} else if (average < 6.5){
    alert ("Trung binh")
} else if (average < 8){
    alert ("Kha")
} else{
    alert ("Gioi")
}