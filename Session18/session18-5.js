let experience = +prompt("Nhap so nam kinh nghiem")
if (experience < 1){
    alert("Moi vao nghe")
} else if (experience <= 3){
    alert("Nhan vien co kinh nghiem")
} else if (experience <= 6){
    alert("Chuyen vien")
} else {
    alert("Quan ly")
}