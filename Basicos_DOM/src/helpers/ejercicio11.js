export default function crearEjercicio11() {
    const state = {
        cache: new Map(),
        isLoading: false
    }

    const debounce = (fn, delay) => {
        let timeoutId;
        clearTimeout(timeoutId);
        return timeoutId = setTimeout(() => {
            fn();
        }, delay);
    }
    const search = async (query) => {
        // funcion que bisca lo que yo escriba en el imput
        const q = query.trim().toLowerCase();
        if(!q) {
            displayEmpty();
            return;
        }

        if (state.cache.has(q)) {
            return state.cache.get(q);
        }

        state.isLoading = true;
        render();

        
        
    }
    const displayCharacters = () => {
    }
    const displayLoading = () => {
        ret
    }
    const displayError = () => {}

    const displayEmpty = () => {

    }
    const render = () => {}

}

// crear una aplicacion que consulta el clima constituida por 6 elementos, subdivididos en un header, footer y un main, el header y el footer se construyen con elementos del dom.
// El main esta subdividido en 3 componentes: que son el search card, el weather card y favorites card.
// el componente search se encarga de buscar dentro de la api la ciudad que queramos.
// ejemplificar el uso de cache utilizando map en localstorage
// dispondremos de un array de 15 imagenes almacenadas en public cpn las difeentes estados climoticos posibkles
// el favoritecard almacenara las ciudades o tarjetas favoritas
// para hacer favorita una ciudad basta con dar dos click de raton y automaticamente se guardara en el favoritecard
// para sacar una carta de las favoritas boton derecho y automitacamnete



// crear un sistema booking de reservas que permita ejemplificar la reserva en un hotel
// el sistema tendra el siguiente interfaz: header, main (un desplegable, donde pueda seleccionar de una api privada las ciudades las ciudades disponibles, dos imput date chechin y checkout donde el checkout no puede ser anterior y el numero de huespedes, automaticamente me mostrara utilizando un componenete cardhotel todos aquellos hoteles que tengan disponibilidad en las fechas) y footer
//