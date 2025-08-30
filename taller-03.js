// Punto 1

const vocales = "aeiouAEIOU"
function desglosarString(cadena, tipo){
    return (tipo === "vocales") ? cadena.split("").filter(letra => vocales.includes(letra)).length 
    : (tipo === "consonantes") ? cadena.split("").filter(letra => !vocales.includes(letra)).length
    : "No es un tipo valido"
}

console.log(desglosarString("murcielagos","vocales"))
console.log(desglosarString("murcielagos","consonantes"))
console.log(desglosarString("murcielagos","12121122")) 

// Punto 2

function twoSum(lista, objetivo){
    for (let i = 0; i < lista.length; i++){
        for (let j = i + 1; j < lista.length; j++){
            if (lista[i] + lista[j] === objetivo){ 
                return [i, j]
            }
        }
    }
    return []
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,4,2], 6))

// Punto 3

const romanos = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}

function conversionRomana(cadena){
    let cifra_arabiga = 0
    for (let i = 0; i < cadena.length; i++){
        let actual = romanos[cadena[i]]
        let siguiente = romanos[cadena[i+1]]
        cifra_arabiga += (actual < siguiente) ? -actual : actual
    }
    return cifra_arabiga
}

console.log(conversionRomana('III'))
console.log(conversionRomana('XIV'))
console.log(conversionRomana('MMXXIV'))
console.log(conversionRomana('MXMVII'))

// Punto 4

function descomposicion(palabra){
    const diccionario = palabra.split(",")
    for (let i = 1; i < diccionario.length; i++){
        for (let j = 1; j < diccionario.length; j++){
            if (diccionario[i] + diccionario[j] === diccionario[0]){
                return [diccionario[i], diccionario[j]]
            }
        }
    }
    return ""
}
console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"))
