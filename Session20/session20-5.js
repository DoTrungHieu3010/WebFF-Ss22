let a = +prompt("Nhap so a")
let b = +prompt("Nhap so b")
let result = a
if (Number.isNaN(a) == false && Number.isNaN(b) == false){
    for (let i=0; i<b -1;i ++){
        result *= a
    }
    alert(result)
} else {
    alert("Khong hop le")
}

