console.log('Tugas pekan ke-2, hari ke-8')
console.log('.... jawaban soal 1')
console.log('')

let luas = (r) => { return Math.PI * (Math.pow(r, 2)) };
console.log('Luas Lingkaran =', luas(7));

let keliling = (r) => { return 2 * (Math.PI * r) }
console.log('Keliling Lingkaran =', keliling(7));


console.log('')
console.log('.... jawaban soal 2')
console.log('')

let kalimat = ""

const gabungKata = (a, b, c, d, e) => {
    kalimat = `${a} ${b} ${c} ${d} ${e}`
    return kalimat
}
console.log(gabungKata('saya', 'adalah', 'seorang', 'frontend', 'developer'))

console.log('')
console.log('.... jawaban soal 3')
console.log('')

class book {
    constructor(name, totalPage, price) {
        this.name = name
        this.totalPage = totalPage
        this.price = price
    }
}

class komik extends book {
    constructor(name, totalPage, price, isColorful) {
        super(name, totalPage, price)

        this.isColorful = isColorful
    }

}

const Kalkulus = new book('Kalkulus', 50, 75000)
const BasisData = new book('Basis Data', 85, 95000)
const OnePiece = new komik('OnePiece', 45, 50000, true)
const BlackClover = new komik('BlackClover', 50, 25000, false)
console.log(Kalkulus)
console.log(BasisData)
console.log(OnePiece)
console.log(BlackClover)