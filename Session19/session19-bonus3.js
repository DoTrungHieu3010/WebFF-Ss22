let balace = +prompt("Moi ban nhap vao so du tai khoan")
let result, choice
if (balace > 0) {
    choice = +prompt("Moi ban nhap lua chon \n 1.Nap tien \n 2.Rut tien")
    switch (choice){
        case 1:
            let add = +prompt("Moi ban nhap so tien muon nap")
            if (add > 0){
                result = balace + add
                result = result.toLocaleString("vi-VN")
                alert(`So du tai khoan sau khi nap la: ${result} VND`)
            } else {
                alert("Sai du lieu")
            }
            break
        case 2:
            let withdraw = +prompt("Moi ban nhap so tien muon rut")
            if (withdraw > 0){
                result = balace - withdraw
                result = result.toLocaleString("vi-VN")
                alert(`So du tai khoan sau khi rut la: ${result} VND`)
            } else {
                alert("Sai du lieu")
            }
            break
        default:
            alert("Loi du lieu")
            break
    }
} else {
    alert("Loi du lieu nhap vao")
}
