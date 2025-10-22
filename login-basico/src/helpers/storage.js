import { ENV } from "../config/env";
// crear funcion inicialstorage que reciba un array de usuarios y los guarde en el localstorage

/**
 * 
 * @param {*} arrayUsuarios 
 */
export function inicialStorage(arrayUsuarios) {
    localStorage.setItem(ENV.VITE_STORAGE_KEY, JSON.stringify(arrayUsuarios));
    console.info(`${VITE_APP_TITLE} Usuarios guardados correctamen: `)
}

//funcion llamada getusuarios() que se traiga todos los usuarios que hay almacenados en la clave key

/**
 * 
 * @returns 
 */
export function getUsuarios() {
    return JSON.parse(localStorage.getItem(ENV.VITE_STORAGE_KEY)) || [];
}
//crear una funcion setusuarios(usuarios) y lo guarde en el localstorage en la key del .env

export function setUsuarios(user) {
    const users = getUsuarios();
    users.push(user);
    inicialStorage(users);
}