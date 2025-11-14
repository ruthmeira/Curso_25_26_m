// -------------
// OpenWeatherMap Helper Functions
// -------------

const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const VITE_API_OPENWEATHER = import.meta.env.VITE_API_OPENWEATHER;

//------ VERSION 1 USANDO PROMISE ------

export function getWeatherPromise(city="Granada") {
    const url = `${VITE_API_OPENWEATHER}?q=${city}&units=metric&lang=es&appid=${VITE_API_KEY}`;
    //peticiones a una api de openweather

    return fetch(url)
    .then(response => {
        if (!response.ok) throw new Error("Error al obtener los datos de la api")
        return response.json();
    })
    .then(data => {
        console.log(`---- Clima de la ciudad: ${city}----`)
        console.log(`${data.main.temp}-- Temperatura: ºC`);
        const arrayImg = ["", "", "", ""];
        const weather = data.weather[0].main;
        console.log(weather);
        return data;
    })
    .catch(Error => console.log("Error al obtener los datos de la api"))
    .finally(() => console.log("Cerrando getWeatherPromise"))
}