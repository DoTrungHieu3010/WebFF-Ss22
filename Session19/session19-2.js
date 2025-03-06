let text = prompt("Nhap ki tu muon kiem tra")
if (text >= 'a' && text <= 'z' || text >= 'A' && text <= 'Z'){
    alert (`Ki tu ${text} la chu cai`)
} else {
    alert (`Ky tu ${text} khong phai la chu cai`)
}
