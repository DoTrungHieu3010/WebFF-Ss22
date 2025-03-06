let result = 49;
let loop = true;
while (loop === true) {
  let answer = prompt("Mời bạn nhập vào số cần đoán");

  if (answer === result) {
    console.log("BINGO");
    loop = false;
  }
}