let num = +prompt("Moi ban nhap vao so nguyen")
let result = "1"
if (Number.isInteger(num) == true){
    for (let i = 2; i <= num; i++){
        if (num % i == 0){
            result = result + ", " + i 
        }
    }
    alert(`${result}`)
} else {
    alert("Loi kieu du lieu")
}