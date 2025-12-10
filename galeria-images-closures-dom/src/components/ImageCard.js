import { imagesData } from "../data/images";

export function createImageCard(image, onImageClick, onFavoriteToggle) {
    //contenedor principal
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group relative";
    card.dataset.imageId = image.id;

    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.title;
    img.className = "w-full h-64 object-cover group-hover:opacity-90 transition-opacity";
    //img.onerror=()=>img.src "aqui iria la url de una imagen que simbolice no disponible"
    card.appendChild(img);

    // gestionar el corazon de favorito

    // informacion de la imagen

    const infoContainer = document.createElement("div");
    infoContainer.className = "";

    const title = document.createElement("h3");
    title.className = "";
    title.textContent = "";
    infoContainer.appendChild(title);

    const author = document.createElement("p");
    author.className = "";
    author.textContent = "";
    infoContainer.appendChild(author);

    // introducir en card toda la informacion
    card.appendChild(infoContainer);

    // evento de la tarjeta
}

export function createImageGrid() {
    const data = imagesData;

    data.forEach(imagen => {
        console.log(imagen.title)
    })

}

