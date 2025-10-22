//Gestion bancaria revolut

//Crear cuentas con titular y saldo
//Depositar dinero
//Retirar dinero siempre que haya saldo
//consultar saldo
//transferir dinero entre cuentas aiempre que haya saldo
//Mantener un listado de todas las cuentas creadas y buscar una cuenta por su titular
//Cuando se cree una cuenta se debe generar un numero de cuenta aleatorio de 22 digitos

/**
 * 
 * @param {*} titular es el nombre del titular de la cuenta 
 * @param {*} saldo es el saldo inicial de la cuenta, por defecto 0
 */
function Cuenta(titular, saldo=0) {
    this.titular = titular;
    this.saldo = saldo;
    this.numeroCuenta = generarNumeroCuenta();
}

/**
 * 
 * @returns {string} numero de cuenta de 22 digitos
 */

function generarNumeroCuenta() {
    let numeroCuenta = '';
    for (let i = 0; i < 22; i++) {
        numeroCuenta += Math.floor(Math.random() * 10);
    }
    return numeroCuenta;
}

/**
 * 
 * @param {*} cuenta es la cuenta en la que se va a depositar el dinero
 * @param {*} cantidad es la cantidad a depositar, debe ser mayor que 0
 */

function depositar(cuenta, cantidad) {
    if (cantidad > 0) {
        cuenta.saldo += cantidad;
        console.log(`Depósito de ${cantidad} realizado.`);
    }  else {
        console.log('Cantidad inválida para depósito.');
    }
}

/**
 * 
 * @param {*} cuenta es la cuenta de la que se va a retirar el dinero
 * @param {*} cantidad es la cantidad a retirar, debe ser mayor que 0 y menor o igual que el saldo
 */

function retirar(cuenta, cantidad) {
    if (cantidad > 0 && cantidad <= cuenta.saldo) {
        cuenta.saldo -= cantidad;
        console.log(`Retiro de ${cantidad} realizado.`);
    } else {
        console.log('Cantidad inválida para retiro o saldo insuficiente.');
    }   
}

/**
 * 
 * @param {*} cuenta es la cuenta de la que se quiere consultar el saldo
 * @returns devuelve el saldo de la cuenta
 */

function consultarSaldo(cuenta) {
    return cuenta.saldo;
}

/**
 * 
 * @param {*} cuentaOrigen es la cuenta de la que se retira el dinero
 * @param {*} cuentaDestino es la cuenta a la que se ingresa el dinero
 * @param {*} cantidad es la cantidad a transferir
 */

function transferir(cuentaOrigen, cuentaDestino, cantidad) {
    if (cantidad > 0 && cantidad <= cuentaOrigen.saldo) {
        cuentaOrigen.saldo -= cantidad;
        cuentaDestino.saldo += cantidad;
        console.log(`Transferencia de ${cantidad} realizada de ${cuentaOrigen.titular} a ${cuentaDestino.titular}.`);
    } else {
        console.log('Cantidad inválida para transferencia o saldo insuficiente.');
    }       
}

let cuentas = [];

/**
 * 
 * @param {*} titular es el nombre del titular de la cuenta
 * @param {*} saldo es el saldo inicial de la cuenta, por defecto 0
 * @returns devuelve la cuenta creada
 */

function crearCuenta(titular, saldo=0) {    
    let nuevaCuenta = new Cuenta(titular, saldo);
    cuentas.push(nuevaCuenta);
    console.log(`Cuenta creada para ${titular} con número ${nuevaCuenta.numeroCuenta}.`);
    return nuevaCuenta;
}

/**
 * 
 * @param {*} titular es el nombre del titular de la cuenta a buscar
 * @returns devuelve la cuenta encontrada o undefined si no existe
 */

function buscarCuenta(titular) {
    return cuentas.find(cuenta => cuenta.titular === titular);
}

function ejemploUso() {
    let cuenta1 = crearCuenta('Ruth', 1000);
    let cuenta2 = crearCuenta('Juan', 500);
    depositar(cuenta1, 200);
    retirar(cuenta2, 100);
    console.log(`Saldo de ${cuenta1.titular}: ${consultarSaldo(cuenta1)}`);
    console.log(`Saldo de ${cuenta2.titular}: ${consultarSaldo(cuenta2)}`);
    transferir(cuenta1, cuenta2, 300);
    console.log(`Saldo de ${cuenta1.titular} después de transferencia: ${consultarSaldo(cuenta1)}`);
    console.log(`Saldo de ${cuenta2.titular} después de transferencia: ${consultarSaldo(cuenta2)}`);
    let cuentaBuscada = buscarCuenta('Ruth');
    if (cuentaBuscada) {
        console.log(`Cuenta encontrada: ${cuentaBuscada.titular} con saldo ${cuentaBuscada.saldo}`);
    } else {
        console.log('Cuenta no encontrada.');
    } 
}

ejemploUso();

