//*For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola..
const popularToys = []
const toys = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 }
]
for (let toy of toys) {
  let toySelling = toy.sellCount
  if (toySelling > 15) {
    popularToys.push(toy)
  }
}
console.log(popularToys)

//*ESTABLEZCO LA CONDICION PARA INTRODUCIR EN EL NUEVO ARRAY LOS ELEMENTOS QUE TENGAN MAS DE 15 VENTAS
