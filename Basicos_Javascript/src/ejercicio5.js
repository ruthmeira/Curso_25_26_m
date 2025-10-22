// usos de los arrays

// declaracion:
const edades = [];
const frutas = ['manzana', 'pera', 'plátano', 'naranja'];

// usamos el constructor array

const cp = new Array();
const cc = new Array('ES', 'FR', 'IT', 'DE');

// añadir:
edades.push(23); // añade al final
edades.unshift(18); // añade al principio

// eliminar:
edades.pop(); // elimina el último y retorna lo eliminado
edades.shift(); // elimina el primero y retorna lo eliminado

// **** slice extrae una parte del array y devuelve un nuevo array
edades.slice(1,4); // extrae desde la posición 0 hasta la 1 (sin incluirla)
edades.slice(2); // extrae desde la posición 2 hasta el final
edades.slice(-2); // extrae los dos últimos

// ************ map

edades.map( (edad) => edad * 2 ); // devuelve un nuevo array con las edades multiplicadas por 2

// ****** filter
edades.filter( (edad) => edad >= 18 ); // devuelve un nuevo array con las edades mayores o iguales a 18