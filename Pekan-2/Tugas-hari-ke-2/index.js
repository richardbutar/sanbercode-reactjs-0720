console.log('.... jawaban soal 1')
console.log('')
var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'Komik', timeSpent: 1000 }
]


readBooks(10000, books[0], function (sisaWaktu) {
    readBooks(sisaWaktu, books[1], function (sisaWaktu) {
        readBooks(sisaWaktu, books[2], function (sisaWaktu) {
            readBooks(sisaWaktu, books[3], function () {

            })
        })
    })
})
