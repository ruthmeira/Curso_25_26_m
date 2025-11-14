// funcion asincrona usando PROMISE
const VITE_API_URL = import.meta.env.VITE_API_URL;

export function dataJSONPromise() {
    console.log("---dataJSONPromise---");
    // hacer una funcion que se traiga la dara xxx usando Promise
    fetch(VITE_API_URL)
    .then((response) => {
        if (!response.ok === "ok") {
            throw new Error ("Error al traer la data");
        }
        return response.json(); 
    })
    .then(data => {
        console.log('Data obtenida de: ${VITE_API_URL}:')
        console.log(data);
    })
    .catch((error) => console.log('Error ... ${error}'))
    .finally(message => console.log('Cerrando JSONPromise'));
}
// funcion asincrona usando ASYNC/AWAIT

export const dataJSONAsync = async () => {
    console.log("---dataJSONAsync---");
    try {
        const response = await fetch(VITE_API_URL);
        if (!response.ok) {
            throw new Error ("Error al traer la data");
        } 
        const data = await response.json();
        const dataParseada = data.map((infoFoto) => {
            return { 
                title:infoFoto.title,
                thumbnailUrl:infoFoto.thumbnailUrl,
            };
        });
        console.log('Data obtenida de: ${VITE_API_URL}:');
        console.log(dataParseada);
    } catch (error) {
        console.log('Error ... ${error}');
    }
};
