let num = +prompt("Nhap so nguyen bat ki")
let result = 0
if(num > 0){
    for(let i = 0; i <= num; i++){
        result += i
    }
    alert(`Tong cac so nguyen tu 1 den ${num} la: ${result}`)
} else {
    alert("Du lieu nhap vao khong hop le")
}