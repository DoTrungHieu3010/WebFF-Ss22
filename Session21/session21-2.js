let odd = 0
let even = 0
for(let i = 0; i<5; i++){
    let num = +prompt("Nhap so nguyen")
    if (num % 2 == 0){
        even++
    } else {
        odd++
    }
}
alert(`So luong so chan: ${even} \n So luong so le: ${odd}`)