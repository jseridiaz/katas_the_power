//!Sumar los elementos de este array

const numbers = [1, 2, 3, 5, 45, 37, 58]

function sum(param) {
  let suma = 0
  for (let i = 0; i < param.length; i++) {
    let number = param[i]
    console.log((suma += number))
  }
  return suma
}
sum(numbers)
//! CUIDADO AL DEJAR EL RETURN DENTRO DEL BUCLE, PORQUE EN CUANTO TENGA LA PRIMERA VUELTA DEJARA DE CALCULAR Y NO SEGUIRA EL BUCLE. A SI QUE PARA CONTINUAR EL BUCLE Y VER EL RESULTADO LO QUE HAGO ES UN CONSOLE.LOG DEL RESULTADO DESPUES DE LA SUMA.
