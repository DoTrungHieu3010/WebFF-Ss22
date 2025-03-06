let i, j, k
document.write(`a, <br>`)
for (i = 0; i < 10; i++) {
    j = 10
    j = j - i;
    for (j; j > 0; j--) {
        document.write("*")
    }
    document.write(`<br>`)
}
document.write(`b, <br>`)
for (i = 0; i < 10; i++) {
    j = 10
    j = j - i
    for (j; j <= 10; j++) {
        document.write("*")
    }
    document.write(`<br>`)
}
document.write(`c, <br>`)
for (i = 1; i <= 10; i++) {
    for (j = 0; j < 10 - i; j++) {
        document.write("&nbsp&nbsp")
    }
    k = 10
    k = k - i
    for (k; k < 10; k++) {
        document.write("*")
    }
    document.write(`<br>`)
}
document.write(`d, <br>`)
for (i = 1; i <= 10; i++) {
    j = 11
    j = j - i
    for (j; j < 10; j++) {
        document.write("&nbsp&nbsp")
    }
    k = 0
    k = k + i
    for (k; k < 10; k++) {
        document.write("*")
    }
    document.write(`<br>`)
}