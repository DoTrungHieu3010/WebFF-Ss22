let banKinh = +prompt("Nhap ban kinh");
let chieuCao = +prompt("Nhap chieu cao");
let chuViDay = 2 * 3.14 * banKinh;
let dienTichXungQuanh = 2 * 3.14 * banKinh * chieuCao;
let dienTichToanPhan = 2 * 3.14 * banKinh * (chieuCao + banKinh);
let theTich = 3.14 * (banKinh ** 2) * chieuCao;
alert(`Chu vi đay: ${chuViDay.toFixed(2)} Dien tich xung quanh: ${dienTichXungQuanh.toFixed(2)} Dien tich toan phan: ${dienTichToanPhan.toFixed(2)} The tich hinh tru: ${theTich.toFixed(2)}`);