//Ejercicio 7

//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne)
  } else if (numberTwo > numberOne) {
    console.log(numberTwo)
  } else {
    console.log('Son Números Iguales')
  }
}

sum(20, 50)
