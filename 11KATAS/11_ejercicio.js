const mixedElements = [
  6,
  1,
  'Rayo',
  1,
  'vallecano',
  '10',
  'upgrade',
  8,
  'hub',
  true
]
function averageWord(param) {
  let sumaNumer = 0
  let sumaString = 0
  for (let i = 0; i < param.length; i++) {
    let element = param[i]
    if (typeof element === 'number') {
      console.log((sumaNumer += element))
      console.log('total de suma de numeros')
      console.log('-------------------------')
    } else if (typeof element === 'string') {
      console.log((sumaString += element.length))
      console.log('total de cadena de strings')
      console.log('-------------------------')
    } else {
      console.log(
        `----Seras casi con seguridad un booleano....${param[param.length - 1]}`
      )
      console.log('-------------------------')
    }
  }

  console.log(sumaNumer + sumaString)
  console.log('Suma Total de Ambos')
  return sumaNumer + sumaString
}

averageWord(mixedElements)
