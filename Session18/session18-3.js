let admin = prompt("Nhap ADMIN")
let password
if (admin === "ADMIN"){
    password = prompt("Nhap mat khau")
    if (password === "TheMaster"){
        alert("welcome")
    }else if (password === null){
        alert("cancelled")
    } else {
        alert("Wrong answer")
    }
} else if(admin === null) {
    alert("cancelled")
} else {
    alert("i don't know you")
}