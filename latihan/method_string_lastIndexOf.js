const readline =require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan kata yang ingin dicari: ", (kataCari) => {
        //gunakan lastIndexOf untuk mencari kataCari dalam kalimat
        const indeksKataTerakhir = kalimat.lastIndexOf(kataCari);
        if (indeksKataTerakhir !== -1) {
            console.log(`kata '${kataCari}' ditemukan pada indeks terakhir: '${indeksKataTerakhir}`);
        } else {
            console.log(`kata '${kataCari}'tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    })
})