const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
for (let alienCharacter in alien) {
  console.log(`${alienCharacter}: ${alien[alienCharacter]}`)
}

//*TAMBIEN SE PUEDE HACER ESTA ITERACION DE UN OBJETO CON UN  FOR DE LA SIGUIENTE FORMA.
//* SEGUN FOROS DE INTERNET for: 0.600ms. for in: 0.900ms  EL FOR NORMAL ES 3ms mas eficiente.

let keys = Object.keys(alien)
for (let i = 0; i < keys; i++) {
  let key = keys[i]
  console.log(`${key}: ${keys[key]}`)
}
