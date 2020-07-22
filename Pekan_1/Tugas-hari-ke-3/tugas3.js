console.log('// soal 1')
console.log('.... jawaban soal 1')
console.log(' ')

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var modifKataKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.substr(1).toLowerCase();
var upperKataKeempat = kataKeempat.toUpperCase();
console.log(kataPertama.concat(' ' + modifKataKedua + ' ' + kataKetiga + ' ' + upperKataKeempat))

console.log(' ')
console.log('// soal 2')
console.log('.... jawaban soal 2')
console.log(' ')

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var strInt_1 = parseInt(kataPertama);
var strInt_2 = parseInt(kataKedua);
var strInt_3 = parseInt(kataKetiga);
var strInt_4 = parseInt(kataKeempat);

var sum = strInt_1 + strInt_2 + strInt_3 + strInt_4;

console.log('Hasil Penjumlahan String to Number = ' + sum)

console.log(' ')
console.log('// soal 3')
console.log('.... jawaban soal 3')
console.log(' ')

var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

console.log(' ')
console.log('// soal 4')
console.log('.... jawaban soal 4')
console.log(' ')

var nilai = 60

if (nilai >= 80) {
    console.log(nilai + ' Indeks nilainya adalah A')
} else if (nilai >= 70) {
    console.log(nilai + ' Indeks nilainya adalah B')
} else if (nilai >= 60) {
    console.log(nilai + ' Indeks nilainya adalah C')
} else if (nilai >= 50) {
    console.log(nilai + ' Indeks nilainya adalah D')
} else {
    console.log(nilai + ' Indeks nilainya adalah E')
}


console.log(' ')
console.log('// soal 5')
console.log('.... jawaban soal 5')

var tanggal = 09;
var bulan = 4;
var tahun = 1995;

if (tanggal < 1 || tanggal > 31) {
    console.log('Data Tidak Valid, Tanggal tidak sesuai')
} else if (bulan < 1 || bulan > 12) {
    console.log('Data tidak Valid,Bulan Tidak sesuai')
} else {
    month = bulan;
    switch (month) {
        case 1: { month = 'januari'; break; }
        case 2: { month = 'februari'; break; }
        case 3: { month = 'Maret'; break; }
        case 4: { month = 'April'; break; }
        case 5: { month = 'Mei'; break; }
        case 6: { month = 'Juni'; break; }
        case 7: { month = 'Juli'; break; }
        case 8: { month = 'Agustus'; break; }
        case 9: { month = 'September'; break; }
        case 10: { month = 'Oktober'; break; }
        case 11: { month = 'November'; break; }
        case 12: { month = 'Desember'; break; }
        default: { console.log('salah'); break; }
    }

    console.log('Tanggal Lahir = ' + tanggal + ' ' + month + ' ' + tahun)
}
