
    const valorGames = "games";

    export function getPlayedGames() {
        const data = localStorage.getItem(valorGames);
        return data ? JSON.parse(data) : [];
    }

    export function addPlayedGame(id) {
        const played = getPlayedGames();

        if (!played.includes(id)) {
            played.push(id);
            localStorage.setItem(valorGames, JSON.stringify(played));
        }
    }

    export function removePlayedGame(id) {
        const eliminado = getPlayedGames().filter(gameid => gameid !== id);
        localStorage.setItem(valorGames, JSON.stringify(eliminado));
    }

    export function isPlayed(id) {
        return getPlayedGames().includes(id);
    }
