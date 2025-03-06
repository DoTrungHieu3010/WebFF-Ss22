let num = +prompt("Nhap so nguyen bat ki")
if(num>0){
    document.write(`Cac so chia het cho 5 tu 1 den ${num} la: `)
    for(let i= 1;i<=num; i++){
        if(i%5==0 && i<6){
            document.write(`${i}`)
        } else if(i>=6 && i%5==0) {
            document.write(`, ${i}`)
        }
    }
} else {
    alert("Du lieu nhap vao khong hop le")
}