console.log('Tugas Pekan Pertama, Hari ke-5')
console.log('.... jawaban soal 1')
console.log(' ')

function halo() {
    return 'Halo Sanber!!!!'
}
console.log(halo())


console.log(' ')
console.log('.... jawaban soal 2')
console.log(' ')

function kalikan(angka1, angka2) {

    return angka1 * angka2
}
var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log('hasil Perkalian = ' + hasilKali)

console.log(' ')
console.log('.... jawaban soal 3')
console.log(' ')

function introduce(a, b, c, d) {

    return 'Nama saya ' + a + ',' + ' umur saya ' + b + 'tahun, alamat saya di ' + c + ',' + ' dan saya punya hobby yaitu ' + d + '!!'
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)