let num = +prompt("Nhap so bat ky")
let j = 3
let result
if (num > 1 && Number.isInteger(num) == true){
    document.write("2")
    for (let i = 0; i < num - 1; i++){
        for (j; ; j++){
            let check = 0
            for (let k = 2; k < j; k++){
                if(j % k == 0){
                    check = 1
                }
            }
            if (check == 0){
                result = j
                break
            }
        }
        j = result + 1
        document.write(`, ${result}`)
    }
}