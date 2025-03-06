let result = "1, 2"
let num = +prompt("Nhap vao so nguyen bat ky")
if (Number.isInteger(num) == true && num > 2){
    for (let i = 3; i<= num ;i++){
        let check = 0
        for (let j = 2; j<i; j++){
            if (i % j == 0){
                check++
                break
            }
        }
        if(check == 0){
            result = result + ", " + i
        }
    }
    document.write(result)
} else if (num == 2){
    document.write("1, 2")
} else if (num == 1){
    document.write("1")
} else {
    alert("Sai du lieu")
}