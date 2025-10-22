/**
 * 
 * @param {Object} arrayProductos - Objeto data
 * @returns {Object} Objeto Productos - Objeto con informacion extraida
 */
export const extraerData = (arrayProductos) => {
    const {
        nombre,
        fabricante: {
            nombre: nombreFabricante,
            contacto
        },
        especificaciones: { ram }
    } = arrayProductos;  
    console.log()
    return {
        nombre,
        nombreFabricante,
        contacto,
        ram
    }
};

//Funcion llamada maxRam que le pases un array de productos y te devuelva el producto con más ram

export const maxRam = (arrayProductos) = {
    
}