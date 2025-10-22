// .at <--- acceso con indice negativo

const frutas = ['manzana', 'pera', 'plátano', 'naranja'];
console.log(frutas.at(-1)); // naranja
console.log(frutas.at(-2)); // plátano

// splice <--- eliminar y añadir elementos en cualquier posición sin crear un nuevo array
frutas.splice(2, 1, 'kiwi', 'mango'); // desde la posición 2 elimina 1 elemento y añade kiwi y mango
console.log(frutas); // ['manzana', 'pera', 'kiwi', 'mango', 'naranja']

// concat <--- unir dos arrays sin modificar los originales
const frutas2 = ['fresa', 'arándano'];
const todasLasFrutas = frutas.concat(frutas2);
console.log(todasLasFrutas); // ['manzana', 'pera', 'kiwi', 'mango', 'naranja', 'fresa', 'arándano']

const arratConcat = [...frutas2, ...frutas]; // esta es la que hay que usar spread operator
console.log(arratFrutas); // ['fresa', 'arándano', 'manzana', 'pera', 'kiwi', 'mango', 'naranja']


// set <--- otro tipo de datos (datos únicos)
const numeros = [1, 2, 3, 4, 4, 5, 5, 6];
const setNumeros = new Set(numeros); // crea un set con los números únicos
console.log(setNumeros); // Set(6) { 1, 2, 3, 4, 5, 6 }
console.log([...setNumeros]); // [1, 2, 3, 4, 5, 6] convierte el set en un array

// .reduce <--- reduce un array a un único valor
//pesos.reduce((acucmuladore, elemento, indice, array) => aqui va la logica, valorInicialDelAcumulador)
// acumulador, elemento <-- obligatorios
// el resto son opcionales
// no muta el array original

const pesos = [60, 72, 80, 90, 95];

pesos.reduce((suma, peso) => suma + peso, 0); // suma todos los pesos, el 0 es el valor inicial del acumulador

//realizar la multipicacion de todos los pesos
//en contrar el maximo y el minimo
//dado un array que sea manzana, platana, naranja, manzana, manzana, platano, pera, pera devolverme un objeto clave valor que me diga nombre de la fruta : cuantas veces aparece esa fruta
//dado el siguiente array dimensional se pide aplanar dicho array en un array unidimensional

pesos.reduce((producto, peso) => producto * peso, 1); // multiplica todos los pesos, el 1 es el valor inicial del acumulador

pesos.reduce( (max, peso) => peso > max ? peso : max, pesos[0]); // encuentra el peso máximo, el pesos[0] es el valor inicial del acumulador
pesos.reduce( (min, peso) => peso < min ? peso : min, pesos[0]); // encuentra el peso mínimo, el pesos[0] es el valor inicial del acumulador

const frutas3 = ['manzana', 'plátano', 'naranja', 'manzana', 'manzana', 'plátano', 'pera', 'pera'];
// [manzana: 3, platano: 2, naranja: 1, pera: 2]

frutas3.reduce( (acc, fruta) =>  {
    acc[fruta] = (acc[fruta] || 0) + 1;
    return acc;
}, {}); // cuenta las frutas, el {} es el valor inicial del acumulador


// array de objetos
const usuarios = [
    { id: 1, nombre: 'Ana', edad: 25, data : {books: 100}},
    { id: 2, nombre: 'Luis', edad: 30, data : {books: 50} },
    { id: 3, nombre: 'María', edad: 28, data : {books: 20} },
    { id: 4, nombre: 'Carlos', edad: 35, data : {books: 10} },
    { id: 5, nombre: 'Marta', edad: 22, data : {books: 0} }
];

usuarios.find(usuario => usuario.nombre.toLowerCase === 'luis'); // encuentra el usuario con nombre 'Luis'
let resultado = usuarios.find(usuario => Number(usuario.edad) >= 28) ?? {}; // encuentra el primer usuario con edad mayor o igual a 28, si no lo encuentra devuelve un objeto vacío

//dado el siguiente array de usuarios devolver un array con solo los nombres de los usuarios que tienen en su biblioteca mas de 20 libros
//obtener el valor total de todos los libros si suponemos un precio de 28 euros por libro
// decirme que usuarios no tienen libros en su biblioteca


usuarios.filter(usuario => Number(usuario.data.books) > 20).map(usuario => usuario.nombre); // devuelve un array con los nombres de los usuarios que tienen más de 20 libros
usuarios.reduce((total, usuario) => total + (usuario.data.books * 28), 0); // calcula el valor total de todos los libros, asumiendo un precio de 28 euros por libro
usuarios.filter(usuario => usuario.data.books === 0).map(usuario => usuario.nombre); // devuelve un array con los nombres de los usuarios que no tienen libros


