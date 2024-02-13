/*Ejercicio 8

Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:

*/
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
const ciudades = [
  'Manhatan',
  'Chicago',
  'New Orleans',
  'New York',
  'Los Angeles',
  'Nuevo Mexico'
]
function findLongestWord(matrix) {
  let longestWord = matrix[0]
  for (let i = 1; i < matrix.length; i++) {
    let element = matrix[i]
    if (element.length > longestWord.length) {
      longestWord = element
    }
  }
  console.log(longestWord)
  return longestWord
}
findLongestWord(avengers)
findLongestWord(ciudades)
