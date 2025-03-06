let cdai = +prompt("Nhap chieu dai")
let crong = +prompt("Nhap chieu rong")
let i, j ,k
for(i = 0; i< crong; i++){
    if(i==0 || i == crong - 1){
        for(j = 0; j< cdai; j++){
            document.write("*")
        }
        document.write(`<br>`)
    }else if (i>0 && i< crong-1){
        document.write("*")
        for(j = 0; j< cdai-2;j++){
            document.write("&nbsp&nbsp")
        }
        document.write("*")
        document.write(`<br>`)
    } 
}