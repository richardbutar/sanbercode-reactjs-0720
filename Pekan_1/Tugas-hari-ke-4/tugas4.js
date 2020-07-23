console.log('Tugas Pekan Pertama, Hari ke-4(Looping,Array)')
console.log('.... jawaban soal 1')

var n = 2;
var m = 20;
console.log('LOOPING PERTAMA')
while (n <= 20) {

    console.log(n + " -  I Love coding")
    n = n + 2;
}
console.log(' ')
console.log('LOOPING KEDUA')
while (m >= 2) {
    console.log(m + " - I Will Become a Frontend Developer")
    m = m - 2
}

console.log(' ')
console.log('.... jawaban soal 2')
console.log(' ')

for (var x = 1; x <= 20; x++) {
    if (x % 2 == 1 && x % 3 == 0) {
        console.log(x + " - I Love Coding")
    } else if (x % 2 == 0) {
        console.log(x + ' - Berkualitas')
    } else {
        console.log(x + ' - Santai')
    }
}

console.log(' ')
console.log('.... jawaban soal 3')
console.log(' ')

var a = '';
for (var i = 0; i < 7; i++) { //cek kolom
    for (var j = 0; j <= i; j++) { // cek baris
        a += "#";
    }
    a += '\n'
}
console.log(a)


console.log(' ')
console.log('.... jawaban soal 4')
console.log(' ')

var kalimat = "saya sangat senang belajar javascript"
var konversi = kalimat.split(" ")

console.log(konversi)

console.log(' ')
console.log('.... jawaban soal 5')

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()
console.log('Disorting dulu')
console.log(daftarBuah)

temp = ''

console.log('HASIL YANG DIINGINKAN :')
for (var i = 0; i <= 4; i++) {
    temp = daftarBuah[i]
    console.log(temp)
}
