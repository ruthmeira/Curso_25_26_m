// importaria el CSS

import { initialApp } from "./app";
import bcrypt from "bcryptjs";

//initialApp();

//hash las password:

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(admin1234, salt);