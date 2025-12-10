import { createImageGrid } from "./ImageCard";

export default function createGalleryApp() {
  // contenedor principal
  const container = document.createElement("div");
  container.className = "min-h-screen bg-linear-to-br from-purple-100 via-white to-pink-900"
  
  // header
  const header = document.createElement("header");
  header.className = "bg-white shadow-lg sticky top-0 z-40";

  const headerContentDiv = document.createElement("div");
  headerContentDiv.className = "max-w-7xl mx-auto px-6 py-6";

  const headerTitle = document.createElement("h1");
  headerTitle.className = "text-3xl font-bold text-purple-800 mb-2";
  headerTitle.textContent = "Galeria de imagenes";

  const headerSubtitle = document.createElement("p");
  headerSubtitle.className = "text-gray-600";
  headerSubtitle.textContent = "Aprende Closures, funciones fabrica y manipulacion del dom";

  headerContentDiv.appendChild(headerTitle);
  headerContentDiv.appendChild(headerSubtitle);
  header.appendChild(headerContentDiv);


  // main
  const main = document.createElement("main");
  main.className = "max-w-7xl mx-auto px-6 py-8";

  // contador de favoritos
  const counterComponente = document.createElement("h2");
  counterComponente.textContent = "Aqui ira el componente de FavoritosCounter";

  // modal de imagen
  const imageModal = document.createElement("h2");
  imageModal.textContent = "Aqui ira el componente de ImageModal";

  // grid de imagenes
  const gridComponente = document.createElement("h2");
  gridComponente.textContent = "Aqui ira el componente grid con las imagenes";

  const imageGrid = createImageGrid();
  //añadimos todo al main
  main.appendChild(counterComponente);
  main.appendChild(imageModal);
  main.appendChild(imageGrid);

  // footer
  const footer = document.createElement("footer");
  footer.className = "bg-purple-800 text-white py-4 mt-8";

  const footerContentDiv = document.createElement("div");
  footerContentDiv.className = "max-w-7xl mx-auto px-6 text-center";

  const footerText = document.createElement("p");
  footerText.className = "text-sm";
  footerText.innerHTML = `Ejercicios DOM de Ruth FM <br> Link`;

  footerContentDiv.appendChild(footerText);
  footer.appendChild(footerContentDiv);
  
  
  // añadimos todo al container
  container.appendChild(header);
  container.appendChild(main);
  container.appendChild(footer);





    return {
        element : container,

    };
}
