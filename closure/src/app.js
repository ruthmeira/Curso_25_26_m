const app = () => {


  // primera funcion closure
  const crearClosure = () => {
    let mensajeSecreto = "Yo soy tu closure";

    return () => {
      console.log("Mensaje:", mensajeSecreto);
    }
  };

  const miClosure = crearClosure();
  miClosure();

  // ------Scope lexico
  let nivelGlobal = "Soy Global";
  const functionExterna = () => {
    let nivelExterno = "Soy del scope externo";
    const functionInterna = () => {
        let nivelInterno = "Soy el scope interno";

        // demostraciones...
        console.log("Accediendo a: ", nivelGlobal);
        console.log("Accediendo a: ", nivelExterno);
        console.log("Accediendo a: ", nivelInterno);
    };
    functionInterna();
  };
  functionExterna();

  // vamos a crear un objeto publico que tenga las claves saldo y retirardinero.
  // ejercicio ENCAPSULADO

  /**
   * objetoPublico salfo, retirarDinero(cantidad) <-- retirar ese dinero del saldo
   */

  const objetoPublico = {
    saldo: 1000,
    retirarDinero: function(cantidad) {
        this.saldo -= cantidad;
    },
  };

  objetoPublico.retirarDinero(100);
  console.log("Saldo: ", objetoPublico.saldo);


  const crearCuentaBancaria = (saldoInicial=0) => {
    // saldo debe de ser private
    let saldo = saldoInicial;
    return {
        obtenerSaldo: () => saldo,
        depositar: (cantidad= 0) => {
            if (cantidad> 0) {
                saldo+= cantidad;
                console.log(`Cantidad ${cantidad} añadida. El nuevo saldo es: ${saldo}`);
            }
            // si es negativo no hago nada
        },
        retirar: (cantidad = 0) => {
            if (cantidad > saldo) {
                console.log("Error, no hay suficiente saldo");
                return false;
            }
            return true;
        }
    };
  };

  // primera cuenta
  const cuenta1 = crearCuentaBancaria(1000);
  cuenta1.depositar(100);
  console.log("Saldo de la cuenta 1: ", cuenta1.obtenerSaldo());
  const cuenta2 = crearCuentaBancaria(100);
  console.log("Saldo de la cuenta 2: ", cuenta2.obtenerSaldo());
  cuenta2.saldo = 2;
  console.log("Saldo de la cuenta 2: ", cuenta2.obtenerSaldo());

  // setInterval(funcion, 1000) <-- cada segundo ejecuta la funcion
  // clearInterval(id) <-- para el intervalo
  // contador que incremente, baje, resetear y obtener el valor del contador
  const crearContador = (valorInicial = 0) => {
    let contador = valorInicial;
    return {
        incrementar: (cantidadIncrementar= 1) => {
            contador += cantidadIncrementar;
            return contador;
        },
        decrementar: (cantidadDecrementar= 1) => {
            contador -= cantidadDecrementar;
            return contador;
        },
        resetear: () => {
            contador = valorInicial;
            return contador;
        },
        obtenerValor: () => contador,
    };
  };

  // Ejercicio 2
  // Ejemplificar un carrito de la compra persistente utilizando closure y estableciendo la persistencia a traves de una base de datos sqlite3
  // Ejemplificar un carrito de la compra que permita insertar cantidad productos, eliminar productos y calcular total

  const carritoCompra = () => {
    let productos = [];
    return {
        agregarProducto: (producto) => {
            productos.push(producto);
        },
        eliminarProducto: (producto) => {
            productos = productos.filter(p => p !== producto);
        },
        calcularTotal: () => {
            return productos.reduce((total, producto) => total + producto.precio, 0);
        },
        listarProductos: () => productos,
    };  
};
 
}

export default app;