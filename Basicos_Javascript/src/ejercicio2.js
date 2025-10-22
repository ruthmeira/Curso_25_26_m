//crear un juego de un dado que utilizando una funcion llamada tirar dado permita tirar un dado y devuelva un valor del 1 al 6.
// Ademas crear una funcion llamada simular que le pase como parametro el numero de tiradas y me diga número se ha repetido

/**
 * Tira un dado y devuelve un valor aleatorio entre 1 y 6.
 * @returns {number} - un número aleatorio entre 1 y 6
 */
function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

/** 
 * Simula un número de tiradas y devuelve el número que nás se ha repetido
 * @param {number} numTiradas - el número de tiradas a simular
 * @returns {number} - el número que más se ha repetido en las tiradas
 */

function simular(numTiradas) {
    let resultados = {};

    for (let i = 0; i < numTiradas; i++) {
        let resultado = tirarDado();
        if (resultados[resultado]) {
            resultados[resultado]++;
        } else {
            resultados[resultado] = 1;
        }
}
    let maxRepeticiones = 0;
    let numeroMasRepetido = null;

    for (let numero in resultados) {
        if (resultados[numero] > maxRepeticiones) {
            maxRepeticiones = resultados[numero];
            numeroMasRepetido = numero;
        }
    }
    return numeroMasRepetido;
}

console.log(tirarDado());
console.log(simular(1000));


