// dame un array de nombres, creale una funcion llamada mayusculas que ponga como mayusculas todo lo que este en el array que pase como parametro
// crear una funcion llamada precios con iva quue al pasarle un array de precios me los devuelva con el iva incluido
// crear una funcion impares cuadrado que le pase un array de numeros y me devuelva solo los impares elevados al cuadrado
// crear una funcion normalizar email que le pase un array de emails y que pueden llevar espacios al principio o al final y quiero que me los devuelva sin espacios
// crear una funcion llamada filtrar longitud que le poase como parametro un array de nombres, un tamaño y me devuelva solo  los nombres que tengan longitud mas grande que el tamaño pasado como parametro
// crear una funcion normalizar nombres propios que le pase como parametro un array de nombres propios y me los devuelva con la letra capital en mayusculas y el resto en minusculas

const nombres = ['ruth', 'ana', 'maria', 'juan', 'pepe'];

/**
 * 
 * @param {*} arrayNombres es un array de nombres 
 * @returns   devuelve un array con los nombres en mayusculas
 */
function mayusculas(arrayNombres) {
    return arrayNombres.map( nombre => nombre.toUpperCase() );
}

const precios = [100, 200, 300, 400];

/**
 * 
 * @param {*} arrayPrecios es un array de precios
 * @param {*} iva   es el iva a aplicar, por defecto 0.21
 * @returns     devuelve un array con los precios con el iva incluido
 */
function preciosConIva(arrayPrecios, iva=0.21) {
    return arrayPrecios.map( precio => precio * (1 + iva) );
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function imparesCuadrado(arrayNumeros) {
    return arrayNumeros
    .filter( numero => numero % 2 !== 0 )
    .map( numero => numero ** 2 );
}


const emails = [' gehbn@gmail.com'];

/**
 * 
 * @param {*} arrayEmails  es un array de emails
 * @returns  devuelve un array de emails sin espacios al principio ni al final
 */
function normalizarEmail(arrayEmails) {
    return arrayEmails.map( email => email.trim() );
}

const nombres2 = ['RUth', 'ana p', 'MARIA', 'JuAn', 'PePe'];

/**
 * 
 * @param {*} arrayNombres  es un array de nombres propios
 * @returns  devuelve un array con los nombres propios normalizados (primera letra mayuscula y el resto minusculas)
 */
function normalizarNombresPropios(arrayNombres) {
    //ten en cuenta los nombres compuestos
    return arrayNombres.map( nombre => nombre
        .split(' ')
        .map( parte => parte.charAt(0).toUpperCase() + parte.slice(1).toLowerCase() )
        .join(' ')
    );
}


/**
 * 
 * @param {*} arrayNombres  es un array de nombres
 * @param {*} tamaño  es el tamaño minimo que deben tener los nombres
 * @returns  devuelve un array con los nombres que tienen una longitud mayor o igual que el tamaño pasado como parametro
 */
function filtrarLongitud(arrayNombres, tamaño) {
    return arrayNombres.filter( nombre => nombre.length >= tamaño );
}

console.log(mayusculas(nombres));
console.log(preciosConIva(precios));
console.log(imparesCuadrado(numeros));
console.log(normalizarEmail(emails));
console.log(normalizarNombresPropios(nombres2));
console.log(filtrarLongitud(nombres, 4));