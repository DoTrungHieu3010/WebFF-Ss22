let canh1 = +prompt("Nhap chieu dai canh thu nhat")
let canh2 = +prompt("Nhap chieu dai canh thu hai")
let canh3 = +prompt("Nhap chieu dai canh thu ba")
let max = canh1, side1= canh2, side2 = canh3

if (canh1 < 0 || canh2 < 0 || canh3 < 0){
    alert ("Sai du lieu")
} else {
    if (max < side1) {
        let temp = max;
        max = side1;
        side1 = temp;
    }
    if (max < side2) {
        let temp = max;
        max = side2;
        side2 = temp;
    }
    let result = (side1**2) + (side2**2 )
    if (canh1 == canh2 && canh2 == canh3 && canh3 == canh1){
        alert("Day la tam giac deu")
    } else if(canh1 == canh2 || canh2 == canh3 || canh3 == canh1) {
        alert("Day la tam giac can")
    } else if (max == Math.sqrt(result)){
        alert("Day la tam giac vuong")
    } else {
        alert("Day la tam giac thuong")
    }
}