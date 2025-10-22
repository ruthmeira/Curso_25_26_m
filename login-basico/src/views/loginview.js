export function renderLoginForm() {

    return `

    <form id="loginForm">
        <label>Username: </label>
        <imput type="text" id="username" name="username" required></imput>
        <label>Password: </label>
        <imput type="password" id="password" name="password" required></imput>
        <button type="submit">Iniciar Sesion</button>
    </form>;

    <p id="message"></p>
`;
}