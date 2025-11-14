import { crearCatalogo, reproducirCancion} from "./bibliotecaMusical";


const catalogo = crearCatalogo();
console.log(`Catálogo creado con ${catalogo.size} canciones`);

try {
 let cancion = reproducirCancion(1);
 console.log(`Reproduciendo: ${cancion.titulo} - ${cancion.artista}`);
 console.log(`Total reproducciones: ${cancion.reproducciones}`);

 cancion = reproducirCancion(1); // Segunda reproducción
 console.log(`Reproduciendo: ${cancion.titulo} - ${cancion.artista}`);
 console.log(`Total reproducciones: ${cancion.reproducciones}`);

 reproducirCancion(999); // ID que no existe
} catch (error) {
 console.error(`Error: ${error.message}`);
}

//crear una funcion que le pase como parametro artista y que me devuelva el nombre de todas las canciones que tiene dicho artista.
//Crear una funcion que le pase como parametro max o min y obtenga ordenadas por el nombre de la canciones las 5 canciones mas o menos reproduccidas
// crear una funcion reset que ponga todos los contadores de las canciones a 0
// crear una funcion que obtenga el total