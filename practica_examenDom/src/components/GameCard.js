import { addPlayedGame, isPlayed, removePlayedGame } from "../utils/storage";

export function GameCard() {
    const API = "http://localhost:1500/api/games";
    function create(game) {
        const card = document.createElement("div");
        card.classList.add("game-card");
        card.dataset.gameId = game.id;

        const imagen = document.createElement("img");
        imagen.src = `${API}${game.cover}`;
        imagen.alt = game.title;
        card.appendChild(imagen);

        const info = document.createElement("div");
        info.classList.add("game-info");
        const titulo = document.createElement("h3");
        titulo.classList.add("game-title");
        titulo.textContent = game.title;
        info.appendChild(titulo);
        const plataforma = document.createElement("p");
        plataforma.classList.add("game-platform");
        plataforma.textContent= game.platform;
        info.appendChild(plataforma);
        const genero = document.createElement("p");
        genero.classList.add("game-genre");
        genero.textContent = game.genre;
        info.appendChild(genero);
        const valoracion = document.createElement("div");
        valoracion.classList.add("game-rating");
        valoracion.textContent = `⭐ ${game.rating}`;
        info.appendChild(valoracion);
        const fecha = document.createElement("p");
        fecha.classList.add("game-release");
        fecha.textContent = game.release;
        info.appendChild(fecha);
        card.appendChild(info);

        if (isPlayed(game.id)) {
            card.classList.add("game-played");
        }

        //eventos
        card.addEventListener("click", () => {
            card.classList.toggle("game-played");

            if(isPlayed(game.id)) {
                removePlayedGame(game.id);
            } else {
                addPlayedGame(game.id);
            }
        });

        card.addEventListener("contetextmenu", e => {
            e.preventDefault();

            if(!isPlayed(game.id)) {
                addPlayedGame(game.id);
            } else {
                removePlayedGame(game.id);
            }
        });

        card.addEventListener("dblclick", () => {
            card.remove();
        });
        
        return card;
    }

    return create;
}