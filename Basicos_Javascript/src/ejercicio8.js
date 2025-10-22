const { act } = require("react");

const numeros = [1,2,3,4,5];
/*
//generar un objeto resumen de mi array que tenga los siguientes campos

{
    valor: numero_correspondiente
    posicion: posición_dentro_del_array
    esUltimo: array_que_me_diga_si_es_el_último (true|false)
}
*/
const resumenNumeros = numeros.map((numero, indice, miArray)=>{
    return{
        valor: numero,
        posicion: indice,
        esUltimo: indice === miArray.length - 1
    }
});

console.log(resumenNumeros); //array de objetos mapeados a una estructura dada.


const products =[
    {name:"laptop", price: 1000, stock:5, active:true},
    {name: "mouse logitech", price: 28.56, stock:0, active:false}
]
/*
Mapeado:

nombre
precioOriginal
precioConIva
hayStock
*/

const productsWithVat = products.map((product)=>{
    return{
        name: product.name,
        originalPrice: product.price,
        priceWithVat: product.price * 1.21,
        aviable: product.stock > 0,
    }
})

/*
filtrame los productos que tienen stock y están activos 
*/

const productsStockActive = products.filter((product)=> {
    return product.stock > 0 && product.activefilter;
})

//busca todos los datos de laptop de tipo case sensitive

const findProducts = products
    .filter((product)=> product.name.toLowerCase().includes("laptop"))
    .map((product) => {
        return{
            name: product.name,
            price: product.price,
            stock: product.stock,
            active: product.active
        }
    })

//una función que busque la información de un producto por el nombre
/**
 * Busca los productos con el nombre introducido para buscar 
 * @param {array} products 
 * @param {string} wordToFind 
 * @returns array de productos que contengan el parámetro a buscar
 */
const searchProduct = (products, wordToFind) => products
    .filter((product)=> product.name.toLowerCase()
        .includes(wordToFind.toLowerCase())
    )


//crear una función que le pase como parámetro un array de productos, precio_inicial, precio_final 
//y devuelva productos cuyo precio está en ese rango de valor (sin incluirlos)
/**
 * Busca productos del array que tengan su precio entre el rango introducido 
 * @param {array} products 
 * @param {number} inicialPrice 
 * @param {number} endPrice 
 * @returns array de productos cuyo precio se encuentra en el rango introducido
 */
const filterPrice = (products, inicialPrice, endPrice) => products
    .filter((product)=> product.price > inicialPrice && product.price < endPrice)

    //typeof inicialPrice === "number" ? typeof endPrice === "number"
    //modificar el find products para que además me muestre solo los que están activados

//función que le pase un carrito de la compra y devuelva el precio a pagar 
const carrito = [
    {name: "laptop", price: 1000, count:5, category: "Electronica"},
    {name: "mouse logitech", price: 28.56, count:1, category: "Electronica"},
    {name: "monitor msi 24", price: 210.6, count:10, category: "Electronica"},
    {name: "teclado mecánico", price: 150, count:2, category: "Electronica"},
    {name: "Polo Scalper", price: 150, count:2, category: "Ropa"},
    {name: "Pantalón Stradivarius", price: 45, count:5, category: "Ropa"},
]
/**
 * @author Esther Maroto Torres
 * @param {Object[]} cart -Carrito de objetos
 * @param {Number} vat -IVA
 * @return {Number} -Total del carrito IVA incluido
 */
const totalCart = (cart = [], vat = 1.21) => cart
    .reduce((total, product)=>
        //return total+product.price*vat;
        product.count>5 
        ? (total+product.price*vat)*(1-0,5) 
        : total+product.price*vat 
    ,0)

//Atgrupar el carrito por categorías
/*
{
Electrónica:[
    {
    },
    {
    },
],
Ropa:[
    {
    },
    {
    },
]
}
*/

const groupedCart = (cart = [])=> cart
    .reduce((groups, product)=> {
        const categoryFilter = product.category;
        if(!groups[categoryFilter]){
            groups[categoryFilter] = [];
        }
        groups[categoryFilter].push(product);
        return groups;
    },{});

//función que cuente los votos de cada usuario 
// {Ana: 2, Carlos: 3, Beatriz: 1}

const votes = [ "Ana", "Carlos", "Ana", "Beatriz", "Carlos", "Ana"]

const countVotes = (votes = []) => {
    return votes.reduce((total, vote)=>{
        total[vote] = (total[vote] || 0) + 1;
        return total;
    },{});
}


const users = [
    {id: 1, name: "Ana", rol: "admin"},
    {id: 2, name: "Carlos", rol: "user"},
    {id: 3, name: "Beatriz", rol: "admin"},
]

//función (arrayUsers, idBusqueda)---> devuelve el rol que tiene 
//buscar el usuario cuyo id = 2 y obtener el rol que tiene 

const userSearch = (users = [], id = 1) => {
   return users.find(user => Number(user.id) === Number(id)) ?? user.rol;

}

//buscar el indice del array donde se encuentra al usuario con id buscanto
const findUserIndex = (users = [], id = 1) => {
    return users.findIndex(user => Number(user.id) === Number(id));
}

//devuelve -1 si fininfrx devuelve errot o no encurtra la avciòn requerida
const numerosPares = [4,5,6,7,8];
const hayPares = numerosPares.some(numero => numero % 2 === 0); //devuelve true o false si hay algún número par 


// OBJETOS EN JAVASCRIPT
const usuario = {
    nombre: "Ana",
    email: "nndns@hch.es",
    active: true,
}

// para las claves
//const = Object.keys(usuario); // ["nombre", "email", "activo"]

// utilidad verificar si las claves estan todas siguiendo un objetivo de partida
// 1- ¿como compruebo que todas las claves existan?
function validarCamposRequeridos(objeto, camposRequeridos){
    const clavesObjeto = Object.keys(objeto);
    // retorno verdadero o falso
    return camposRequeridos.every(campo => {
        return clavesObjeto.includes(campo)
    });
}

//data:
const datosFormulario = { nombre: "carlos", active: true};
const esvalido = validarCamposRequeridos(datosFormulario, ["nombre", "email", "active"]); // false


// para los valores
const producto = {
    nombre: "laptop",
    price: 1000,
    stock: 5,
    active: true,
}

//array de valores
const valoresProducto = Object.values(producto); // [ 'laptop', 1000, 5, true ]

//verificar si algun valor cumple una condicion
const precipitaciones = {
    enero: 110,
    febrero: 98,
    marzo: 120,
    abril: 50,
}

//algun mes la precipitacion fue superior a 100 litros??
const mesSuperiorCien = Object.values(precipitaciones)
.some(precipitacion => precipitacion > 100); // true

//cuantos litros han caido en los meses enero hasta abril??
const litroTotales = Object.values(precipitaciones)
.reduce((total, precipitacion) => total + Number(precipitacion), 0);

//calcular la precipitacion máxima
//const precipitacionMaxima = Object.values(precipitaciones)
//.reduce((max, precipitacion) => precipitacion > max ? precipitacion : max, 0);
const precipitacionMaxima = Math.max(...Object.values(precipitaciones));

//obtener pares [clave, valor] <--- entries()
const configuracion = {
    temas: "oscuro",
    idioma: "es",
    notificaciones: true,
    volumen: 50,
}

//obtener  array de pares [clave, valor]
const entradas = Object.entries(configuracion); 

const usuarios = {
    name: "ruth",
    password: "ffff",
    email: "gghgg@jj.es",
    active: true,
}


//filtrar. Eliminar los campos sensibles de este object usuarioBD ("password")
Object.entries(usuariosBD).filter()

//destructuring
const {nombre, email} = usuarioBD; // --> const nombre = usuarioBD.nombre 
                                    // --> const email = usuarioBD.email
const data = [1, 2, 3, 4];

const [a,b,c] = data; // --> const a = data[0]; 
                      // --> const b = data[1]; 
                      // --> const c = data[2];

function vData(arrayData) {
    const [v1, v2] = arrayData;
    console.log("v1: ", v1);
    console.log("v2: ", v2)
}  

vData([1,2,3,4,5]) // <---- 

//crear funcion llamada mostrarPersona. Obtener el username y las dos primeras redes sociales que el usuario tenga
const persona = {
    id: 1,
    info: {
        username: "ruth",
        redes: ["facebook", "twitter", "instagram"]
    }
}

const { info: {username, redes: [red1, red2] } } = persona;

//obtener el nombre y la edad del siguiente objeto. 
// si no existe edad que guarde valor 0
const data2 = {
    id: 101,
    usuario: {
        perfil: { 
        nombre: "lucia",
        edad: 25,
        direccion: {
            ciudad: "madrid",
            pais: "España",
        }
    },
    active: true,
}
};

const {usuario:{perfil:{nombre2, edad = 0 }}} = data2;

const productos = [
  {
    id: 1,
    nombre: "laptop",
    precio: 1000,
    fabricante: {
      nombre: "HP",
      pais: "EEUU",
      contacto: {
        email: "info@hp.com",
        telefono: 123456789,
      },
    },
    especificaciones: {
      ram: "16GB",
      cpu: "Intel i7",
    },
  },
  {
    id: 2,
    nombre: "smartphone",
    precio: 800,
    fabricante: {
      nombre: "Samsung",
      pais: "Corea del Sur",
      contacto: {
        email: "soporte@samsung.com",
        telefono: 987654321,
      },
    },
    especificaciones: {
      ram: "8GB",
      cpu: "Exynos 2100",
    },
  },
  {
    id: 3,
    nombre: "tablet",
    precio: 600,
    fabricante: {
      nombre: "Apple",
      pais: "EEUU",
      contacto: {
        email: "contact@apple.com",
        telefono: 112233445,
      },
    },
    especificaciones: {
      ram: "6GB",
      cpu: "Apple M1",
    },
  },
  {
    id: 4,
    nombre: "monitor",
    precio: 300,
    fabricante: {
      nombre: "Dell",
      pais: "EEUU",
      contacto: {
        email: "ventas@dell.com",
        telefono: 998877665,
      },
    },
    especificaciones: {
      ram: null,
      cpu: null,
    },
  },
  {
    id: 5,
    nombre: "impresora",
    precio: 200,
    fabricante: {
      nombre: "Canon",
      pais: "Japón",
      contacto: {
        email: "support@canon.jp",
        telefono: 554433221,
      },
    },
    especificaciones: {
      ram: "2GB",
      cpu: "ARM Cortex",
    },
  },
  {
    id: 6,
    nombre: "teclado",
    precio: 50,
    fabricante: {
      nombre: "Logitech",
      pais: "Suiza",
      contacto: {
        email: "info@logitech.com",
        telefono: 667788990,
      },
    },
    especificaciones: {
      ram: null,
      cpu: null,
    },
  },
  {
    id: 7,
    nombre: "mouse",
    precio: 30,
    fabricante: {
      nombre: "Razer",
      pais: "EEUU",
      contacto: {
        email: "support@razer.com",
        telefono: 443322110,
      },
    },
    especificaciones: {
      ram: null,
      cpu: null,
    },
  },
  {
    id: 8,
    nombre: "smartwatch",
    precio: 250,
    fabricante: {
      nombre: "Xiaomi",
      pais: "China",
      contacto: {
        email: "help@xiaomi.cn",
        telefono: 321654987,
      },
    },
    especificaciones: {
      ram: "2GB",
      cpu: "Snapdragon Wear 4100",
    },
  },
  {
    id: 9,
    nombre: "consola",
    precio: 500,
    fabricante: {
      nombre: "Sony",
      pais: "Japón",
      contacto: {
        email: "contact@sony.jp",
        telefono: 741852963,
      },
    },
    especificaciones: {
      ram: "16GB",
      cpu: "AMD Ryzen Zen 2",
    },
  },
  {
    id: 10,
    nombre: "camara",
    precio: 1200,
    fabricante: {
      nombre: "Nikon",
      pais: "Japón",
      contacto: {
        email: "info@nikon.jp",
        telefono: 159357456,
      },
    },
    especificaciones: {
      ram: "4GB",
      cpu: "Expeed 6",
    },
  },
];

// crear una funcion que extraiga los datos del objeto y me devuleva la siguiente estructura
//nombre, fabricante [nombre, contacto], especificaciones(solo la ram)
//imaginemos un array de productos
//usando la nueva especificacion obtener el nombre del producto de mas ram


const newData = (arrayProductos) => {
    const {
        nombre,
        fabricante: {
            nombre: nombreFabricante,
            contacto
        },
        especificaciones: { ram }
    } = arrayProductos;  
    return {
        nombre,
        fabricante,
        especificaciones
    }
};

const newDataArray = (arrayProductos) => arrayProductos
.map(producto => newData(producto))
