import { bienvenida } from "../db/data";


export function createEjercicio1() {

const noFetching = () => bienvenida.texto

function fetching() {
const PORT = import.meta.env.VITE_PORT;
const URL = import.meta.env.VITE_URL;

const URL_PORT = `${URL}:${PORT}`;
return fetch(`${URL_PORT}/bienvenida`)
    .then((res) => res.json())
    .then((data) => {
        return data.texto;
    })
    .catch((error) => {
            console.error(error);
    });

}

//aqui se decide donde pintar el objeto en el DOM  
function render () { 
const cointainer = document.createElement("div");
const parrafo = document.createElement("p");
parrafo.classList.add("welcome-message");
fetching().then((data) => (parrafo.textContent = data));
//parrafo.textContent = noFetching();
cointainer.appendChild(parrafo);
return cointainer;
}

return {
    render,
}
}
