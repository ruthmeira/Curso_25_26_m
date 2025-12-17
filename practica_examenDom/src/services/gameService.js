export function gameServices() {
    let cacheGame = [];
    const API = "http://localhost:1500/api/games";

    async function fecthAllGames() {
        try {
            const response = await fetch(API);
            if(!response.ok) throw new Error("Error en la solicitud");
            const data = await response.json();
            cacheGame = data;
        } catch (error) {
            console.error("Error al traer la dat de la API");
        }
    }

    function getGames() {
        return [...cacheGame] || [];
    }

    function getGameById(id) {
        return cacheGame.find(game => game.id === id);
    }

    return {
        fecthAllGames,
        getGames,
        getGameById
    }
}