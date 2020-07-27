console.log("Pekan 2-Tugas 6")
console.log('.... jawaban soal 1')
console.log('')

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
var personObj = {
    firstName: arrayDaftarPeserta[0],
    lastName: arrayDaftarPeserta[1],
    gender: arrayDaftarPeserta[2],
    age: arrayDaftarPeserta[3]
}

console.log(personObj)

console.log('')
console.log('.... jawaban soal 2')
console.log('')

var fruit = [
    {
        nama: 'strawberry',
        warna: 'merah',
        adaBijinya: 'tidak',
        harga: 9000
    },
    {
        nama: 'jeruk',
        warna: 'oranye',
        adaBijinya: 'ada',
        harga: 8000
    },
    {
        nama: 'Semangka',
        warna: 'hijau dan merah',
        adaBijinya: 'ada',
        harga: 10000
    },
    {
        nama: 'pisang',
        warna: 'kuning',
        adaBijinya: 'tidak',
        harga: 5000
    }
];

console.log(fruit[0])

console.log('')
console.log('.... jawaban soal 3')
console.log('')

var dataFilm = []
var Film = {
    Nama: "Dolittle",
    Durasi: '101 menit',
    Genre: 'komedi',
    Tahun: 2020

}
function tambahFilm(Film) {

    dataFilm.push(Film)
}

console.log(tambahFilm(Film))
console.log(dataFilm)


console.log('')
console.log('.... jawaban soal 4')
console.log('')

class Animal {
    constructor(name) {
        this.name = name
        this.legs = 4
        this.cold_blooded = false
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)

class Ape extends Animal {
    constructor(name) {
        super(name)
        this.legs = 2
    }
    yell() {
        console.log("Auooo")
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name)
    }
    jump() {
        console.log("hop hop")
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

console.log('')
console.log('.... jawaban soal 5')
console.log('')

class Clock {

    constructor({ template }) {
        var timer;
        function render() {
            var date = new Date()

            var hours = date.getHours()
            if (hours < 10) hours = '0' + hours
            var mins = date.getMinutes()
            if (mins < 10) mins = '0' + mins
            var secs = date.getSeconds()
            if (secs < 10) secs = '0' + secs

            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }
        this.stop = function () {
            clearInterval(timer);
        };
        this.start = function () {
            render();
            timer = setInterval(render, 1000);
        };
    }
}




var clock = new Clock({ template: 'h:m:s' });
clock.start();


