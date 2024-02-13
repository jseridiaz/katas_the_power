const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]
let camisetaArray = []
for (let product of products) {
  if (product.includes('Camiseta')) {
    camisetaArray.push(product)
  }
}
console.log(camisetaArray)
