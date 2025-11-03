
// Punto 1
function convertidorTemp(temperatura) {
    const Tempconvertida = temperatura * (9/5) + 32
    return Tempconvertida
}

// Punto 2
function resolvedor(a,b,c,resultadoPositivo){
    const raiz = Math.sqrt(b ** 2 - 4 * a * c);
    let x;
    if (resultadoPositivo) {
        x = (-b + raiz) / (2 * a);
    } else {
        x = (-b - raiz) / (2 * a);
    }
    return x;
}


// Punto 3
function mejorParidad(numero) {
    if (numero % 2 === 0){
        return true
    }
    return false
}

// Punto 4
function peorParidad(numero) {
    let resultado
    let resultado2
    if (numero === 0){
        resultado = 'es par'
    }
    if (numero === 1){
        resultado = 'es impar'
    }
    if (numero === 2){
        resultado = 'es par'
    }
    if (numero === 3){
        resultado = 'es impar'
    }
    if (numero === 4){
        resultado = 'es par'
    }
    if (numero === 5){
        resultado = 'es impar'
    }
    if (numero === 6){
       resultado = 'es par'
    }
    if (numero === 7){
        resultado = 'es impar'
    }
    if (numero === 8){
       resultado = 'es par'
    }
    if (numero === 9){
        resultado = 'es impar'
    }
    if (numero === 10){
        resultado = 'es par'
    }
    if (numero % 2 === 0) {
        resultado2 = "es par"
        if (resultado === resultado2){
            return resultado
        }
    } 
    if (numero % 2 === 1){
        resultado2 = "es impar"
        if (resultado === resultado2){
            return resultado
        }
    }
    if (resultado === resultado2){
        return resultado
    }
}

export {convertidorTemp, resolvedor, mejorParidad, peorParidad}