//*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

for (let i = 0; i < foodSchedule.length; i++) {
  let food = foodSchedule[i]
  if (food.isVegan === false) {
    food.name = fruits[0]
    food.isVegan = true
    fruits.splice(0, 1)
  }
}
//*Este bucle lo ajusto para que en el caso que se acaben las opciones de sustituir una eleccion que no sea vegetal, entonces eliminar una opcion del menu
for (let food of foodSchedule) {
  if (food.name === undefined) {
    foodSchedule.splice(foodSchedule.indexOf(food), 1)
  }
}
console.log(foodSchedule)
