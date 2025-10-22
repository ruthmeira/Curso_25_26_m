// primer ejercicio de javascript
console.log("Hola, mundo");

//----- declarar las variables -----

//----- declarar la funcion -----

/**
* Suma dos números y devuelve el resultado.
* @param {number} [a=0] - primer número a sumar con valor por defecto 0
* @param {number} [b=0] - segundo número a sumar con valor por defecto 0
* @returns {number} - la suma de a y b
*/
function suma(a=0, b=0) {
    return a + b;
} 

//------ inicializar las aplicaciones -----

// test de la función suma
console.log(suma(3,5));
console.log(suma(10,15));
console.log(suma(7));
console.log(suma());

function saludar(nombreUsuario) {
    return `Bienvenid@, ${nombreUsuario ?? "Usuario"}`;
}

let nombre = "Ana";
