let dollar = +prompt("Nhap so tien do la muon doi:")
var VND = dollar * 25000
VND = VND.toLocaleString('vi-VN')
document.write(VND)