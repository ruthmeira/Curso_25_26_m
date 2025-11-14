import { canciones } from "./data/data";

export function crearCatalogo() {
    const catalogo = new Map();

    canciones.forEach(cancion => {
        const cancionConHistorial = {
            ...cancion,
            historialReproduccion: []
        };
        catalogo.set(cancion.id, cancionConHistorial);
    });

    const CatalogoArray = Array.from(catalogo.entries());

    localStorage.setItem("catalogo", JSON.stringify(CatalogoArray));
    
    return catalogo;
}   

export function reproducirCancion(idCancion) {
   const data = localStorage.getItem("catalogo");
   const catalogoArray = JSON.parse(data);
   const catalogo = new Map(catalogoArray);

   const cancion = catalogo.get(idCancion);
   if (!cancion) {
    throw new Error(`La cancion con ID ${idCancion} no existe.`);
   }
    cancion.reproducciones++;
   cancion.historialReproduccion.push({
    fecha: new Date().toISOString(),
    timestamp: Date.now()
   })

    catalogo.set(idCancion, cancion);
    const nuevoCatalogoArray = Array.from(catalogo.entries());
    localStorage.setItem("catalogo", JSON.stringify(nuevoCatalogoArray));
    return cancion;
}

export function gestionarPlaylists() {
  // 🔹 Cargar las playlists desde localStorage o crear un Map vacío
  const data = localStorage.getItem("playlists");
  const playlists = data
    ? new Map(JSON.parse(data).map(([nombre, ids]) => [nombre, new Set(ids)]))
    : new Map();

  // 🔹 Función auxiliar para guardar en localStorage
    function guardar() {
     const guardar = Array.from(playlists.entries())
     .map(([nombre, setIds]) => [nombre, Array.from(setIds)]);
    
     localStorage.setItem("playlists", JSON.stringify(guardar));
    }


    function crear(nombrePlaylist) {
        if (playlists.has(nombrePlaylist)) {
            return false;
        }

        playlists.set(nombrePlaylist, new Set());
        
        guardar();

        return true;
    }

    function agregar(nombrePlaylist, idCancion) {
        const playlist = playlists.get(nombrePlaylist);
        if (!playlist) return false; // no existe la playlist

        const catalogo = obt
    }
}