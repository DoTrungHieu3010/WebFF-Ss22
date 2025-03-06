let check = 0
let withdraw = +prompt("Nhap so tien can rut")
if (withdraw % 1000 == 0){
    while(1){
        if (withdraw >= 500000){
            withdraw = withdraw - 500000
            check++
        } else {
            break
        }
    }
    document.write(`500.000 - ${check} to <br>`)
    check = 0
    while(1){
        if (withdraw >= 200000){
            withdraw = withdraw - 200000
            check++
        } else {
            break
        }
    }
    document.write(`200.000 - ${check} to <br>`)
    check = 0
    while(1){
        if (withdraw >= 100000){
            withdraw = withdraw - 100000
            check++
        } else {
            break
        }
    }
    document.write(`100.000 - ${check} to <br>`)
    check = 0
    while(1){
        if (withdraw >= 50000){
            withdraw = withdraw - 50000
            check++
        } else {
            break
        }
    }
    document.write(`50.000 - ${check} to <br>`)
    check = 0
    while(1){
        if (withdraw >= 20000){
            withdraw = withdraw - 20000
            check++
        } else {
            break
        }
    }
    document.write(`20.000 - ${check} to <br>`)
    check = 0
    while(1){
        if (withdraw >= 10000){
            withdraw = withdraw - 10000
            check++
        } else {
            break
        }
    }
    document.write(`10.000 - ${check} to <br>`)
    check = 0
    while(1){
        if (withdraw >= 5000){
            withdraw = withdraw - 5000
            check++
        } else {
            break
        }
    }
    document.write(`5.000 - ${check} to <br>`)
    check = 0
    while(1){
        if (withdraw >= 2000){
            withdraw = withdraw - 2000
            check++
        } else {
            break
        }
    }
    document.write(`2.000 - ${check} to <br>`)
    check = 0
    while(1){
        if (withdraw >= 1000){
            withdraw = withdraw - 1000
            check++
        } else {
            break
        }
    }
    document.write(`1.000 - ${check} to`)
}