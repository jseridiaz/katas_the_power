const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
let i = 0
console.log(duplicates.splice(i, i + 1))
console.log(duplicates)
duplicates.find((param, valor) => param[i] === param[!i])

const elementos = [1, 2, 3, '4', 5]

console.log(elementos, elementos.length)

delete elementos[1]

console.log(elementos, elementos.length)
let x = [1, 1, 2, 2, 3, 4, 5]

let nuevo = x.slice(1, 1 + 1)
console.log(nuevo)

let equipo = [
  'Casillas',
  'Hierro',
  'R. Carlos',
  'Casillas',
  'C ronaldo',
  'Benzema',
  'Mendieta',
  'Gravessen',
  'Gravessen',
  'Mendieta',
  'C ronaldo',
  'Benzema'
]
for (let jugador of equipo) {
  console.count(jugador)
}
