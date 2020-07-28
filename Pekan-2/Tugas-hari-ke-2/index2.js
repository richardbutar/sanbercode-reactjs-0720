console.log('.... jawaban soal 2')
console.log('')

var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

function bacaBuku() {
    readBooksPromise(10000, books[0]).then(function (sisaWaktu) {
        if (sisaWaktu > 0)
            readBooksPromise(sisaWaktu, books[1]).then(function (sisaWaktu) {
                if (sisaWaktu > 0) {
                    readBooksPromise(sisaWaktu, books[2])
                }
            })

    })
        .catch(function (sisaWaktu) {
            console.log(sisaWaktu)
        })

}

bacaBuku()
