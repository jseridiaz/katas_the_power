// Ejercicio 10

// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]
const valores = [200, 100, 700, 890, 147]

function average(param) {
  let suma = 0
  let divisor = param.length
  for (let i = 0; i < param.length; i++) {
    let number = param[i]
    console.log((suma += number))
  }
  console.log(suma / divisor)
  return suma / divisor
}
average(numbers)
average(valores)
