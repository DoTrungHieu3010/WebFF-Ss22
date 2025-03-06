let num = +prompt("Nhap vao so ma ban muon kiem tra")
if (num % 5 == 0 && num % 3 == 0){
    alert(`So ${num} chia het cho ca 3 va 5`)
} else {
    alert(`So ${num} khong chia het cho ca 3 va 5`)
}