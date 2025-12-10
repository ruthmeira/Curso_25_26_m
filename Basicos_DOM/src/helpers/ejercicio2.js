import { tareas } from "../db/data";

export function createEjercicio2() {
    function noFetching() {
        const texto = tareas.map(tarea => tarea.texto);
        const completadas = tareas.map(tarea => tarea.completada);
        return {
            texto,
            completadas
        }
    }

    function render () {
    const cointainer = document.createElement("div");
    const listaDesordenada = document.createElement("ul");
    noFetching().texto.forEach(textoTarea => {
        const itemLista = document.createElement("li");
        if (noFetching().completadas === true) {
            itemLista.classList.add("task.item", "completed");
        } else {
            itemLista.classList.add("task.item");
        }
        itemLista.textContent = textoTarea;
        listaDesordenada.appendChild(itemLista);
    });
    cointainer.appendChild(listaDesordenada);
    return cointainer;
}

return {
    render,
}
}

