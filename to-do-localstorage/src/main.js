/// ---- Importaiones ---- ///

import { dbTareas } from "./db/db";
import mostrarTareas, { getTareas, rellenarLocalStorage } from "./helpers/tareas";

const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;




///----- Inicio del programa ---- ///

rellenarLocalStorage(dbTareas, TEXT_KEY);
mostrarTareas();
getTareas();
