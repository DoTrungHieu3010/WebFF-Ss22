let result = 0
for(let i = 0; i<5; i++){
    let num = +prompt("Nhap so nguyen")
    if (num % 2 != 0){
        result += num
    }
}
alert (`${result}`)