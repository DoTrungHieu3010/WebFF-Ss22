var math = +prompt("So thu nhat")
var physics = +prompt("So thu hai")
var chemistry = +prompt("So thu ba")
let tbc = ((math + physics + chemistry) / 3).toFixed(2)
let result = `Diem trung binh cong 3 mon la ${tbc}`
document.write(result)