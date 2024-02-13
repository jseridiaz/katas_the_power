//! Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

//! pista (cuando eliminamos algo de un array, su longitud se verá afectada)

let duplicates = [
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

let equipo = [
  'Casillas',
  'Hierro',
  'R. Carlos',
  'Casillas',
  'C ronaldo',
  'Benzema',
  'Mendieta',
  'Mendieta',
  'C ronaldo',
  'Benzema'
]
//*La secuencia lógica que he realizado es: En el caso que hayan 2 palabras iguales con diferentes index entondes eliminar el último. De esta forma no hay que modificar la posición del bucle.

function removeDuplicates(param) {
  for (let i = 0; i < param.length; i++) {
    let duplicate = param[i]
    if (param.indexOf(duplicate) < param.lastIndexOf(duplicate)) {
      param.splice(param.lastIndexOf(duplicate), 1)
    }
  }
  console.log(param)
}
removeDuplicates(duplicates)
removeDuplicates(equipo)

//*Aqui la secuencia lógica es igual pero cambia el orden en el que quito los strings, ya que quito el primero que encuentro y no el último, por lo que cuando le resto a la posicion 1 cuando lo eliminamos para analizar la palabra que coge la nueva posición.
let duplicates2 = [
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

let equipo2 = [
  'Casillas',
  'Hierro',
  'R. Carlos',
  'Casillas',
  'C ronaldo',
  'Benzema',
  'Mendieta',
  'Mendieta',
  'C ronaldo',
  'Benzema'
]
console.log(equipo2)
function remove2Duplicates(param2) {
  for (let i = 0; i < param2.length; i++) {
    const element = param2[i]
    if (param2.indexOf(element) < param2.lastIndexOf(element)) {
      param2.splice(param2.indexOf(element), 1)
      i--
    }
  }
  console.log(param2)
}
remove2Duplicates(duplicates2)
remove2Duplicates(equipo2)
