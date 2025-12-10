// crear una funcion getWwatherByCithy(cityName) { que devuelva una data en json}
// crear una funcion llamada parseWeatherData(data) { que devuelva: city, pais, temperatura, humedad, viento, descripcion}
export default function crearEjercicio12() {
    const API_KEY = '27636238332831281281648123238123';
    const getWeatherByCity = async (cityName) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=es`);    
            if (!response.ok) {
                throw new Error('Error al obtener los datos del clima');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    const parseWeatherData = (data) => {
        if (!data) return null;
        return {
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            description: data.weather[0].description
        };
    }
    
    function ejercicio12() {
      // dom
        const container = document.createElement('div');
        container.className = 'ejercicio12-container';
        const header = document.createElement('header');
        const main = document.createElement('main');

        //funcionalidad
        const searchCard = createSearchCard(callback);
    }
    
    function createSearchCard(onSearch) {
        //variable privada si estoy buscando o no
        let isSearching = false;

        //contendor del dom
        const container = document.createElement('div');
        container.className = "bg-white p-4 rounded shadow-md";
        // titulo
        const title = document.createElement('h2');
        title.textContent = "Buscar Ciudad";
        title.className = "text-xl font-bold mb-4";
        // input
        const input = document.createElement('input');
        input.type = "text";
        input.placeholder = "Ingresa el nombre de la ciudad";
        input.className = "w-full p-2 border border-gray-300 rounded mb-4";
        // boton
        const button = document.createElement('button');
        button.textContent = "Buscar";
        button.className = "w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600";

        //crear parrafo llamado estatus que permita pexpecificar los siguientes estados a traves de la funcion setStatus(message, type= info). los estdos son: loading(azul), error(rojo), success(verde), info(gris)
        // que permita modificar el valor del componenete statusElement
        const statusElement = document.createElement('p');
        statusElement.className = "mt-4 text-center";
        statusElement.textContent = "";

        //hacerlo cin if else
        function setStatus(message, type = 'info') {
            statusElement.textContent = message;
            statusElement.className = "";
            if (type === 'loading') {
                statusElement.className += 'text-blue-600';
            } else if (type === 'error') {
                statusElement.className += 'text-red-600';
            } else if (type === 'success') {
                statusElement.className += 'text-green-600';
            } else {
                statusElement.className += 'text-gray-600';
            }
        }

        async function performSearch() {
            const resultado = input.value.trim();
            if (!resultado) {
                setStatus("Por favor ingresa un nombre de ciudad.", "error");
                return;
            }

            // comieza la busqueda
            isSearching = true;
            //ahora hago la busqueda...
            try {
                await onSearch(resultado);
                setStatus("Busqueda realizada exitosamente.", "success");

            } catch (error) {
                setStatus("Error al buscar la ciudad.", "error");
                throw new Error("Error al buscar la ciudad");
            } finally {
                isSearching = false;
            }

            //eventos
        button.addEventListener('click', performSearch);
        input.addEventListener('keypress', (evento) => {
            if (evento.key === 'Enter') {
                performSearch();
            }   
        });

        // agregar elementos al contenedor
        container.appendChild(title);
        container.appendChild(input);
        container.appendChild(button);
        container.appendChild(statusElement);

        return {
            element: container,
            focusInput: () => input.focus(),
            clearForm: () => { input.value = ''; setStatus(''); isSearching = false;},
            getValue: () => input.value.trim()
        }

        }
    }
}