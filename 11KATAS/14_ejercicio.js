const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
//* CREO DENTRO DE LA FUNCION UN NUEVO ARRAY, DONDE INTRODUZCO LAS PALABRAS REPETIDAS CON EL BUCLE FOREACH Y CUANDO ESTAN TODAS INTRODUCIDAS, CUENTO LA LONGITUD DE ESTE NUEVO ARRAY. EL ARRAY DE ORIGEN NO SE MODIFICA Y EL NUEVO LO CREO SOLO COMO ARRAY AUXILIAR PARA CONTAR EL TOTAL DE LAS PALABRAS REPETIDAS
function repeatCounter(param) {
  for (let par of param) {
    console.count('Se repite ' + par)
  }
}

repeatCounter(counterWords)
console.log('-------------------------------------------------')
let equipo = [
  'Casillas',
  'Hierro',
  'R. Carlos',
  'Casillas',
  'C ronaldo',
  'Benzema',
  'Mendieta',
  'Gravessen',
  'Gravessen',
  'Mendieta',
  'C ronaldo',
  'Benzema'
]
repeatCounter(equipo)
