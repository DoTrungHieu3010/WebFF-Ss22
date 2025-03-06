let str = prompt("Nhap chuoi ban muon")
if(str.length > 0){
    let result = str.includes(" ")
    if (result == true){
        alert("Chuoi co dau cach")
    } else if (result == false){
        alert("Chuoi khong co dau cach")
    } else {
        alert("Sai du lieu")
    }
} else {
    alert("Sai du lieu")
}