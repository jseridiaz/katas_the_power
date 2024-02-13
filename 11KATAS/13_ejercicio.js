const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
let nameSearch = 'Logan'
function finderName(param, name) {
  for (let nameFind of param) {
    if (nameFind === name) {
      console.log(
        `True, el nombre se encuentra en la posición ${param.indexOf(name)}`
      )
    } else {
      console.log(`False, Este nombre no se encuentra en la lista`)
    }
  }
}
finderName(nameFinder, nameSearch)
