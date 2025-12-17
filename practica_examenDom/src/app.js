import { GameList } from "./components/GameList";
import { gameServices } from "./services/gameService";

export async function createApp() {
    const service = gameServices();
    const datos = await service.fecthAllGames();
    const allGames = service.getGames();
    const lista = GameList("games-container");

    let searchText = "";
    let order = "none";

    const app = document.getElementById("app");

    const header = document.createElement("header");
    header.textContent = "GameHub - Ruth";
    app.appendChild(header);

    const main = document.createElement("main");
    main.classList.add("main-container");
    app.appendChild(main);

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Escribe el nombre del juego...";
    input.classList.add("search-input");
    main.appendChild(input);

    const select = document.createElement("select");
    select.classList.add("sort-select");
    const opciones = [
        {value: "none", text: "Sin Ordenar"},
        {value: "az", text: "Titulo A-Z"},
        {value: "za", text: "Titulo Z-A"},
        {value: "rating", text: "Rating"}
    ];

    opciones.forEach(opcion => {
        const opcion = document.createElement("option");
        opcion.textContent = opcion.text;
        opcion.value = opcion.value;

        select.appendChild(opcion);
    })

    main.appendChild(select);

    const contenedorGames = document.createElement("div");
    contenedorGames.id = "games-container";
    main.appendChild(contenedorGames);



    function filtrar() {
        if(searchText) {
            const games = allGames.filter(game => 
                game.title.toLowerCase().includes(searchText)
            );
        }

        if(order === "az") {
            games.sort((a, b) => a.title.locateCompare(b.title));
        } else if (opcion === "za") {
            order.sort((a, b) => b.title.locateCompare(a.title));
        } else if (opcion === "rating") {
            order.sort((a, b) => b.rating - a.rating);
        }

        lista.render(games);

    }

    input.addEventListener("input", e => {
        searchText = e.target.value.trim().toLowerCase();
        filtrar();
    })

    select.addEventListener("change", e => {
        opcion = e.target.value.trim().toLowerCase();
        filtrar();
    })

    filtrar();
}