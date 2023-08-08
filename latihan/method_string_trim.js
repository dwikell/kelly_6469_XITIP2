const readline =require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    //gunakan method trim untuk menghapus spasi di awal dan di akhir kalimat
    const kalimatTrimmed = kalimat.trim();
    console.log(`Kalimat setelah di-trim: ${kalimatTrimmed}`);
    rl.close();
});