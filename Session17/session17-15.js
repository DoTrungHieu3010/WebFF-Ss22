let banKinh = +prompt("Nhap ban kinh");
let theTich = (4 / 3) * 3.14 * (banKinh ** 3);
let dienTichBeMat = 4 * 3.14 * (banKinh ** 2);
let chuViLonNhat = 2 * 3.14 * banKinh;
alert(`The tich: ${theTich.toFixed(2)} Din tich be mat: ${dienTichBeMat.toFixed(2)} Chu vi lon nhat: ${chuViLonNhat.toFixed(2)}`);