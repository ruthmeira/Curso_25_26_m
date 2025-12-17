import { GameCard } from "./GameCard";

export function GameList(contenedorId) {
    const create = GameCard();
    const contenedor = document.getElementById(contenedorId);

    function render(games) {
       clear();

       if(games.length === 0) {
        const mensjae = document.createElement("p");
        mensjae.textContent = "No se han encontrado juegos";
        mensjae.classList.add("error")
        contenedor.appendChild(mensjae);
       }

       games.forEach(game => {
        contenedor.appendChild(create(game));
       })
    }

    function clear() {
        contenedor.innerHTML = "";
    }

    return {
        render,
        clear
    }
}