for (let i = 100; i<=999 ; i++){
    i = String(i);
    if ((Math.pow(i[0],3) + (Math.pow(i[1],3)) + (Math.pow(i[2],3))) == i){
        document.write(`${i} `)
    }
}


