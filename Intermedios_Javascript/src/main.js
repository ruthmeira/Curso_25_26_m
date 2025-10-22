// Ejercicio: destructuring profundo

import { productos } from "./data/data";
import { extraerData } from "./helpers/myFuctions";



// crear una funcion que extraiga los datos del objeto y me devuleva la siguiente estructura
//nombre, fabricante [nombre, contacto], especificaciones(solo la ram)
//imaginemos un array de productos
//usando la nueva especificacion obtener el nombre del producto de mas ram


// ------- INICIO DE LA APLICACION

const newDataArray = (arrayProductos) => arrayProductos
.map(producto => extraerData(producto))

console.log(newDataArray(productos));



// ------- FIN DE LA APLICACION)