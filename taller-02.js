// Punto 1

function findMax(lista){
    let max = lista[0]
    for (let i = 0; i < lista.length; i++){
      if (max < lista[i]) {
        max = lista[i]
      }
    }
  return max
}

/*numeros = [3,17,-1,4,-19]
console.log(findMax(numeros))*/

 // Punto 2

function includes(lista, elemento){
  for (let i = 0; i < lista.length; i++){
    if (elemento === lista[i])
      return true
  }
  return false
}

/*numeros = [3,17,-1,4,-19]
console.log(includes(numeros,2))
console.log(includes(numeros,4))*/

// Punto 3


function sum(lista){
  let total = 0
  for (let i = 0; i < lista.length; i++){
   total += lista[i]
  }
  return total
}

/*numeros = [3,17,-1,4,-19]
console.log(sum(numeros))*/

// Punto 4

function missingNumbers(lista){
  let faltantes = []
  let menor = lista[0], mayor = lista[0]
  for (let i = 0; i < lista.length; i++){
    if(lista[i] < menor){
      menor = lista[i]
    }
    if (lista [i] > mayor){
      mayor = lista[i]
    }
  }
  for (let j = menor; j < mayor; j++){
    let falta = true
    for (let k = 0; k < lista.length; k++){
      if (j === lista[k]){
        falta = false
        break
      }
    }
    if (falta){
      faltantes.push(j)
    }
  }
  return faltantes
}

/*numeros = [7,2,4,6,3,9]
console.log(missingNumbers(numeros))*/

export {findMax, includes, sum, missingNumbers}