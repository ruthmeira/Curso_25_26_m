import { ENV } from "../config/env";
import { getUsuarios } from "../helpers/storage";
import bcrypt from 'bcryptjs';

export default function validarCredenciales(username, password) {
    // existen username y password
    // password > 8 caracteres
    // username y password estan en el localstorage
    // nota: siempre, siempre siempre trinear la data de los formularios
    if (!username.trim() || !password.trim() || password.length < 8) {
        return false;
    }
    const users = getUsuarios();
    const user = users.find(user => user.username === username);

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const ok = bcrypt.compareSync(user.passwordhash, hash);

    return ok;
}