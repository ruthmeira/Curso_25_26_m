import { uid } from 'uid'
import { dbTareas } from '../db/db'

const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;

// aqui van laas funciones helper para laa tareas

export const rellenarLocalStorage = (arrayTareas, tareas="Tareas") => {
    // guardar en el localstorage en la clave 
    localStorage.setItem(tareas, JSON.stringify(arrayTareas))
}

//crear una funcion llamada mostrartareas que le pase como parametro una clave y se muetre atraves 
export const mostrarTareas = (claveBuscarLocalStore = "Tareas") => {
    console.log(JSON.parse(localStorage.getItem(claveBuscarLocalStore)));
}

//devuelve un array con las tareas que hay en el localstorage y si no hay nada devuelve un array vacio
export const getTareas = () => {
    //traigo la data
    const dataSinParsear = localStorage.getItem(TEXT_KEY);
    const dataParseada = safeJSONParse(dataSinParsear);
    if (!Array.isArray(dataParseada)) {
        console.log("Error en la data2");
        return [];
    }
    return dataParseada;
}

//recibe un array de tareas y lo guarda en el localstorage
export const saveTareas = (tareas) => {
    try {
        if (!Array.isArray(tareas)) {
            throw new Error('Error, la data ${tareas} no es un array');
        }
        //serializar ---> convierto a string
        const json = JSON.stringify(tareas);
        //guardar en el localstorage
        localStorage.setItem(TEXT_KEY, json);
        console.log("Array guardado correctamente");
    } catch (error) {
        console.log("Error al recliazar el almacenamiento el localstorage");
    }
}

//crea una nueva con el nombre recibido, un id unico, establece completada: false y la fecha de creacion actual. la añade al array de tareas y actualiza el localstorage
export const addTarea = (nombre) => {
    const nombre = Strimg(nombre, "").trim();
    try {
        const nuevaTarea = {
        id: uid(5),
        nombre,
        fechaCreacion: new Date().toISOString(),
        completada: false,
    }

    } catch (error) {
        
    }
    const dbTareas = getTareas();
    
    dbTareas.push(nuevaTarea);
    saveTareas(dbTareas);
}

//elimina la tarea cuyo id conincida con el id recibido y actualiza el localstorage
export const deleteTareas = (id) => {
    const tareas = getTareas();
    const tareasFiltradas = tareas.filter(tarea => tarea.id !== id);
    saveTareas(tareasFiltradas);
}

//busca la tarea por su id y cambia su propiedad completada y la pone a true. actualiza el localstorage
export const completarTarea = (id) => {
    const tareas = getTareas();
    const tareaIndex = tareas.findIndex(tarea => tarea.id === id);
    if (tareaIndex !== -1) {
        tareas[tareaIndex].completada = true;
        saveTareas(tareas);
    }
}

export const descompletrTarea = (id) => {
    const tareas = getTareas();
    const tareaIndex = tareas.findIndex(tarea => tarea.id === id);  
    if (tareaIndex !== -1) {
        tareas[tareaIndex].completada = false;
        saveTareas(tareas);
    }
}

//delvuelve un nuevo array con las tareas que tengan completada en true
export const buscarCompletadas = () => {
    const tareas = getTareas();
    return tareas.filter(tarea => tarea.completada);
}

export const buscarNoCompletadas = () => {
    const tareas = getTareas();
    return tareas.filter(tarea => !tarea.completada);
}

export const buscarPorNombre = (nombre) => {
    const tareas = getTareas();
    return tareas.filter(tarea => tarea.nombre.toLowerCase().includes(nombre.toLowerCase()));
}

function safeJSONParse(text) {
    try {
        if (typeof text !== 'string') {
            throw new Error('Error, la data ${text} no es un string');
        }
        return JSON.parse(text);
    } catch (error) {
        throw new Error('Error al parsear la data}');
    }
}


export default mostrarTareas