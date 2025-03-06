let num1 = +prompt("Moi ban nhap so thu nhat")
let num2 = +prompt("Moi ban nhap so thu hai")
let num3 = +prompt("Moi ban nhap so thu ba")
let max = num1 
if (max < num2){
    max = num2
}
if( max < num3){
    max = num3
}
alert(`So lon nhat la ${max}`)