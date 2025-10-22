import { inicialStorage } from "./helpers/storage";
import { DB } from "./db/db";
import { renderLoginForm } from "./views/loginview";

export function initialApp() {
    // iniciamos guandando los usuarios en localStorage
    inicialStorage(DB);

    //pintamos/renderizamos mi formulario en #app
    const app = document.getElementById("app");
    console.log(app); 
    //añadimos el formulario de login
    app.innerHTML = renderLoginForm();
    const form = document.querySelector("#loginForm");
    const message = document.querySelector("#message");

    //pongo un escuchador de eventos al formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        //comprobar si username y password son correctos
        const { username, password } = Object.entries(new FormData(form));
        // crear funcion que valide que username y password son correctos usando las siguientes restricciones:
        // - no vacias
        // - password > 8 caracteres
        // - username y password estan en el localstorage
        const ok = validarCredenciales(username, password);
        message.innerText = ok ?
        `<span style="color: green;">Bienvenido ${username}</span>` 
        : `<span style="color: red;">Credenciales incorrectas</span>`;
        form.reset();
 })

}
