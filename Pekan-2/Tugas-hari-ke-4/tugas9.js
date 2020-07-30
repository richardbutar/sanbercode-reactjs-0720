console.log('Tugas 9,Es6 Part 2')
console.log('.....Jawaban soal 1')
console.log(' ')

const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName() {
            console.log((firstName + " " + lastName))
            return
        }
    }
}
newFunction("William", "Imoh").fullName()

console.log(' ')
console.log('......Jawaban soal 2')
console.log(' ')

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject

console.log(firstName, lastName, destination, occupation)


console.log(' ')
console.log('Jawaban soal 3')
console.log(' ')


const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined)

