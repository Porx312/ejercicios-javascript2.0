
// // 1 al 50

// Obtener la longitud de una cadena.

function obtenerLogitudCadena(cadena){
    let logitud = cadena.length
    return console.log(logitud)
}

// obtenerLogitudCadena("hola soy porx y este es mi primer ejercio")


// Convertir una cadena a mayúsculas.

function convertirMayuscula(cadena = ""){
    let M = cadena.toUpperCase()
    return console.log(M)
}

// convertirMayuscula("hola soy porx y este es mi segunda ejera")

// Convertir una cadena a minúsculas.

function convertirMiniscula(cadena = "esta vacio"){
    let M = cadena.toLowerCase()
    return console.log(M)
}
// convertirMiniscula("hola soy porx YYYY")
// convertirMiniscula()




// Convertir la primera letra de una cadena a mayúscula.

function convertirPrimera(cadena){
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);

}
// console.log(convertirPrimera("hola lol"))



// Convertir la primera letra de cada palabra de una cadena a mayúscula.
function convertirCadaPalabra(cadena){
    let convertir = cadena.split(" ")
    let newArr = []
    let newCadena;
    for(let i = 0; i < convertir.length; i++){
        newArr.push(convertir[i].charAt(0).toUpperCase() + convertir[i].slice(1))
        newCadena = newArr.join(" ")
    }
    return console.log(newCadena)
}

// convertirCadaPalabra("hola mundo soy alimaña juanito")


// Eliminar los espacios en blanco al inicio y al final de una cadena.

function eliminarEspacios(cadena){
    return console.log(cadena.trim())
}

// eliminarEspacios("  hola mundo  ")


// Reemplazar un carácter o una cadena de caracteres en una cadena.

function remplazar(cadena,remplazar,por){
    let remp = cadena.replace(remplazar,por);
    return console.log(remp)
}

// remplazar("hola mundo","hola","puta")


// Obtener una subcadena de una cadena.

function obtenersub(Cadena = "",sub){
    let newCadena  = Cadena.substring(0,sub)
    return console.log(newCadena)
}
// obtenersub("hola mundo soy yo",4)



// Obtener el índice de una subcadena en una cadena.

function index(cadena,index){
    let newCAdena = cadena.indexOf(index)
    return console.log(newCAdena)
}
// index("hola hola mundo","mundo")



// Verificar si una cadena contiene una subcadena.


function verificar(cadena,sub){
    let newCadena = cadena.includes(sub)
    return console.log(newCadena)
}
// verificar("la casa de papel","casa")
// verificar("la casa de papel","casas")

// Convertir un número a una cadena.

function convertir(numero){
    let newCadena = numero.toString()
    if(typeof newCadena === "string"){
        console.log(true)
    }else{
        false
    }
    return console.log(newCadena)
}
// convertir(12345)


// Convertir una cadena a un número entero.
function convertirNUmero(cadena){
    let newCadena = parseInt(cadena)
    return console.log(newCadena)
}

// convertirNUmero("123456")



// Convertir una cadena a un número decimal.
function convertirNumeroDecimal(cadena){
    let newCadena = parseFloat(cadena)
    return console.log(newCadena)
}
// convertirNumeroDecimal("123456.2")



// Verificar si una cadena es numérica.
    function verificarsicadena(numero){
        return console.log(isNaN(numero))
    }
    // verificarsicadena(1234)
    // verificarsicadena("oads")
    // verificarsicadena(true)
    // verificarsicadena(1)

// Verificar si una cadena es una fecha válida.
function verificarDate(date){
    return console.log(!isNaN(Date.parse(date)))
}
// verificarDate("2022-04-06")
// verificarDate("gola")


// Obtener el año de una fecha en una cadena.

function obtenerAño(date){
    const year  = new Date(date).getFullYear();
    return console.log(year)
}
obtenerAño("2023-04-06")

// Obtener el mes de una fecha en una cadena.

function obtenermes(date){
    const mes  = new Date(date).getMonth() + 1;
    return console.log(mes)
}
obtenermes("2023-04-06")



// Obtener el día de una fecha en una cadena.

function obtenerday(date){
    const day  = new Date(date).getDate();
    return console.log(day)
}
obtenerday("2023-04-06")



// Convertir una fecha en una cadena a un objeto de fecha en JavaScript.
function convertirFecha(cadenaFecha) {
    const fecha = new Date(cadenaFecha);
    return fecha;
  }
  
  console.log(convertirFecha("2023-04-06"))

// Obtener la hora de una fecha en una cadena.
function obtenerHora(){
    let fecha = new Date()
    let hora = fecha.getHours();
    return console.log(hora)
}
obtenerHora()


// Obtener los minutos de una fecha en una cadena.
function obtenerminutes(){
    let fecha = new Date()
    let hora = fecha.getMinutes();
    return console.log(hora)
}
obtenerminutes()



// Obtener los segundos de una fecha en una cadena.
function obtenersegundos(){
        let fecha = new Date()
        let hora = fecha.getSeconds();
        console.log(hora)
}
obtenersegundos()




// Obtener los milisegundos de una fecha en una cadena.
function obtenerMsegundos(cadena){
    let fecha = new Date(cadena)
    let hora = fecha.getMilliseconds();
    console.log(hora)
}
obtenerMsegundos("2023-03-12 18:34:29:03")

// Convertir una cadena de fecha y hora a un objeto de fecha en JavaScript.
function dateAobject(date){
    let objetoFecha = new Date(date);
    return console.log(objetoFecha)
}

dateAobject("2023-04-06T10:30:00")



// Verificar si una cadena es un número de teléfono válido.
function comprobarNumero(numeroTelefono){
    
let regexTelefono = /^\+(?:[0-9] ?){6,14}[0-9]$/;

if(regexTelefono.test(numeroTelefono)) {
  console.log("El número de teléfono es válido");
} else {
  console.log("El número de teléfono es inválido");
}
}
comprobarNumero("+34 654 36 43")



// Verificar si una cadena es una dirección de correo electrónico válida.
function comprobarEmail(correoElectronico){
let regexCorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(regexCorreoElectronico.test(correoElectronico)) {
  console.log("La dirección de correo electrónico es válida");
} else {
  console.log("La dirección de correo electrónico es inválida");
}

    }
    comprobarEmail("gregorioWhite333@gmail.com")



// Verificar si una cadena es una dirección URL válida.

function validarURL(url) {
    // Expresión regular para validar una dirección URL
    var regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    // Verificar si la cadena cumple con el patrón de la expresión regular
    return regex.test(url);
  }
  
  // Ejemplo de uso
  let url = "http://127.0.0.1:5500/ejercicios%20con%20string/string.html";
  if (validarURL(url)) {
    console.log("La URL es válida.");
  } else {
    console.log("La URL no es válida.");
  }


// Obtener el dominio de una dirección URL en una cadena.

function getDomainFromUrl(url) {
    // Crea un enlace temporal para extraer la información del dominio
    const tempLink = document.createElement('a');
    tempLink.href = url;
    // Retorna el hostname del enlace temporal
    return tempLink.hostname;
  }



// Obtener el protocolo de una dirección URL en una cadena.
function getProtocolFromUrl(url) {
    // Crea un enlace temporal para extraer la información del protocolo
    const tempLink = document.createElement('a');
    tempLink.href = url;
    // Retorna el protocolo del enlace temporal
    return tempLink.protocol;
  }



// Obtener la ruta de una dirección URL en una cadena.
function getPathFromUrl(url) {
    // Crea un enlace temporal para extraer la información de la ruta
    const tempLink = document.createElement('a');
    tempLink.href = url;
    // Retorna la ruta del enlace temporal
    return tempLink.pathname;
  }



// Obtener los parámetros de una dirección URL en una cadena.

function getParamsFromUrl(url) {
    // Crea un enlace temporal para extraer la información de los parámetros
    const tempLink = document.createElement('a');
    tempLink.href = url;
    // Retorna los parámetros del enlace temporal como un objeto
    const params = {};
    tempLink.search.slice(1).split('&').forEach(param => {
      const [key, value] = param.split('=');
      params[key] = value;
    });
    return params;
  }


// Verificar si una cadena está vacía.
function isEmptyString(str) {
    return str.trim().length === 0;
  }



// Verificar si una cadena es nula.

function isNullString(str) {
    return str === null;
  }


// Verificar si una cadena contiene solo espacios en blanco.

function isWhitespaceString(str) {
    return str.trim().length === 0;
  }
  


// Verificar si una cadena contiene solo letras.
function contieneSoloLetras(cadena) {
  return /^[a-zA-Z]+$/.test(cadena);
}



// Verificar si una cadena contiene solo números.

function contieneSolonumeros(cadena) {
  return /^[0-9]+$/.test(cadena);
}
console.log(contieneSolonumeros("hola papi"));
console.log(contieneSolonumeros(1234));
console.log(contieneSolonumeros("1234"));



// Verificar si una cadena contiene solo letras y números.
function contieneSolonumeroletrass(cadena) {
  return /^[a-zA-Z0-9]+$/.test(cadena);
}

console.log(contieneSolonumeroletrass("as12."))

// Verificar si una cadena contiene solo caracteres alfanuméricos.


// Verificar si una cadena contiene solo caracteres especiales.

function contieneSolocaracteres(cadena) {
  return /^[^a-zA-Z0-9]+$/.test(cadena);
}
console.log(contieneSolocaracteres(",.."))



// Verificar si una cadena es alfabética.




// Verificar si una cadena es alfanumérica.




// Obtener la posición de la última ocurrencia de un carácter en una cadena.

function obtenerPosicionUltimaOcurrencia(cadena, caracter) {
  return cadena.lastIndexOf(caracter);
}


// Obtener la posición de la primera ocurrencia de un carácter en una cadena.

function obtenerPosicionPrimeraOcurrencia(cadena, caracter) {
  return cadena.indexOf(caracter);
}


// Obtener la posición de la última ocurrencia de una subcadena en una cadena.

function obtenerPosicionUltimaOcurrenciaSubcadena(cadena, subcadena) {
  return cadena.lastIndexOf(subcadena);
}


// Obtener la posición de la primera ocurrencia de una subcadena en una cadena.

function obtenerPosicionPrimeraOcurrenciaSubcadena(cadena, subcadena) {
  return cadena.indexOf(subcadena);
}


// Obtener la cantidad de ocurrencias de una subcadena en una cadena.
function obtenerCantidadOcurrenciasSubcadena(cadena, subcadena) {
  const ocurrencias = cadena.match(new RegExp(subcadena, 'g'));
  return ocurrencias ? ocurrencias.length : 0;
}



// Verificar si una cadena comienza con una subcadena específica.

function comienzaCon(cadena, subcadena) {
  return cadena.startsWith(subcadena);
}


// Verificar si una cadena termina con una subcadena específica.
function terminaCon(cadena, subcadena) {
  return cadena.endsWith(subcadena);
}
// Obtener el número de palabras en una cadena.

function contarPalabras(cadena) {
  const palabras = cadena.split(" ");
  return palabras.length;
}


// Obtener la longitud de la palabra más larga en una cadena.
function longitudDeunacadena(cadena){
  let newCadena = cadena.split(" ");
  let masLarga = 0;
  for(let i = 0; i < newCadena.length; i++){
    if(newCadena[i].length > masLarga){
      masLarga = newCadena[i].length;
    }
  }
  return masLarga
}

console.log(longitudDeunacadena("d s s hola jose pedrito soysdx sa eres estamoss"))

// 50 al 100

// Obtener todas las palabras en una cadena.
  function todaslasPalabras(cadena){
    return cadena.split(" ")
  }
// Verificar si una cadena es palíndromo.
  function palindromo(palabra1 = ""){
    let letra = palabra1.split("").reverse().join("")
    if(palabra1 === letra){
      return console.log("si es un palindromo")
    }else{
      return console.log("no es un palindromo")
    }
  }
  palindromo("oso")
  palindromo("ososs")
// Obtener el carácter en una posición específica de una cadena.
function obtener(cadena,n){
  return cadena.charAt(n)
}
// Obtener los primeros n caracteres de una cadena.
function primeros(cadena,n){
  let caractres = cadena.slice(0,n)
  return console.log(caractres)
}
primeros("juan pedro garza",4)
// Obtener los últimos n caracteres de una cadena.
  function ultimos(cadena,n){
    let cortar = cadena.substring(cadena.length -n)
    return console.log(cortar)
  }
  ultimos("juan pedr0",3)
// Unir dos o más cadenas.
function unir(cadena1 = "", cadena2 = ""){
  let arr1 = cadena1.split(" ")
  let arr2 = cadena2.split(" ")
  let unir = arr1.push(...arr2)
  return console.log(unir)
}
unir("hola mundo","soy juan 2")
// Separar una cadena en un array utilizando un delimitador específico.
function deslimitador(cadena, delimitador) {
  let newarr = cadena.split(delimitador);
  return newarr;
}

console.log(deslimitador("hola-juan-pablo", "-"));
// Convertir una cadena a un array de caracteres.

// Eliminar una subcadena específica de una cadena.
    function eliminarSub(cadena,eliminar){
      let repla = cadena.replace(new RegExp(eliminar, "g"), "")
      return console.log(repla)
    }
    eliminarSub("hola soy juan perez","juan")
// Eliminar todos los espacios en blanco de una cadena.
function espacios(cadena){
  let nuevaCadena = cadena.replace(/\s/g, '');
  return console.log(nuevaCadena)
}
espacios("eliminar espacios en blaco se esta cadena")
// Convertir una cadena en un objeto JSON.
let cadenaJSON = '{"nombre":"Juan","edad":30,"ciudad":"Buenos Aires"}';
let objetoJSON = JSON.parse(cadenaJSON);
console.log(objetoJSON);
// ener la cantiObtdad de vocales en una cadena.

  function contarVocales(cadena){
    let contador = 0;
    let cad = "aeiouAeiou"
    for(let i = 0; i< cadena.length; i++){
      if(cad.indexOf(cadena[i]) !== -1){
        contador++
      }
    }
    return console.log(contador)
  }

  contarVocales("hola soy jussan")




// Obtener la cantidad de consonantes en una cadena.
function contarConsonantes(cadena){
  let contador = 0;
  let cad = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
  for(let i = 0; i< cadena.length; i++){
    if(cad.indexOf(cadena[i]) !== -1){
      contador++
    }
  }
  return console.log(contador)
}

contarConsonantes("hola soy jussan")


// Invertir una cadena.
function invertir(cadena){
  let invertir = cadena.split("")
  let arr = []
  for(let i = invertir.length ; i > 0; i--){
    arr.push(invertir[i])
  }
  let cadenas = arr.join("")
  return console.log(cadenas)
}
invertir("hhola mundo")
// Reemplazar todas las ocurrencias de una subcadena en una cadena.
function reemplazarSubcadena(cadena, subcadenaABuscar, nuevaSubcadena) {
  let nuevaCadena = cadena.replace(new RegExp(subcadenaABuscar, "g"), nuevaSubcadena);
  return nuevaCadena;
}

let cadena = "La casa es roja y la puerta es roja también.";
let nuevaCadena = reemplazarSubcadena(cadena, "roja", "azul");
console.log(nuevaCadena);
// Convertir una cadena a un array utilizando un separador específico.

// Obtener una cadena con un número específico de espacios en blanco.

// Convertir una cadena en una matriz de caracteres utilizando una función de mapa.
function mapdeCaracter(cadena){
  let newcadena = cadena.split("").map((caracter)=>[caracter]);
  return console.log(newcadena)
}

mapdeCaracter("hola ")
// Ordenar una cadena alfabéticamente.
  function ordernarcadena(cadena){
    let arr = cadena.split("")
    let orden = arr.sort()
    return console.log(orden)
  }
  ordernarcadena("hola mundoa")
// Obtener una cadena con los caracteres en orden inverso.

// Obtener una cadena con los caracteres en orden aleatorio.
function mezclarCadena(cadena) {
  let arregloCaracteres = cadena.split("");
  let longitud = arregloCaracteres.length;
  
  // Algoritmo de Fisher-Yates
  for (let i = longitud - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arregloCaracteres[i];
    arregloCaracteres[i] = arregloCaracteres[j];
    arregloCaracteres[j] = temp;
  }
  
  return arregloCaracteres.join("");
}

// Convertir una cadena a un slug válido para una URL.
function slugify(str) {
  str = str.toLowerCase().trim().replace(/\s+/g, '-'); // paso 1 y 2
  str = str.replace(/[^a-z0-9-]/g, ''); // paso 3
  str = str.replace(/--+/g, '-'); // paso 4
  return str;
}
// Convertir una cadena en un array de palabras.

// Concatenar los elementos de un array de cadenas en una única cadena.
function concatenarCadenas(arr) {
  return arr.join('');
}

const arrCadenas = ['Hola', ' ', 'mundo', '!'];
const cadenaConcatenada = concatenarCadenas(arrCadenas);
console.log(cadenaConcatenada); // 'Hola mundo!'
// Obtener la primera palabra de una cadena.
function obtenerPrimeraPalabra(cadena) {
  const palabras = cadena.trim().split(' ');
  return palabras[0];
}
// Obtener la última palabra de una cadena.
function obtenerultimaPalabra(cadena) {
    const palabras = cadena.split(' ');
   const newcadena  = palabras[palabras.length-1];
  return console.log(newcadena)
}
obtenerultimaPalabra("hola soy german")
// Convertir una cadena a una fecha en un formato específico.
function convertirAFecha(cadena) {
  const partes = cadena.split('/');
  const fecha = new Date(partes[2], partes[1] - 1, partes[0]);
  return fecha;
}


// Convertir una fecha en un formato específico a una cadena.
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Obtener una cadena con todos los caracteres en mayúsculas, excepto la primera letra de cada palabra.

function cadenaMayus(cadena = ""){
  let newCAdena = cadena.toUpperCase().split(" ")
  for(let i = 0; i< newCAdena.length; i++){
    if(newCAdena[i]){
      newCAdena[i][0].toLowerCase
    }
  }
  return console.log(newCAdena)
}
cadenaMayus("hola mundo carajo")
// Obtener una cadena con todos los caracteres en minúsculas, excepto la primera letra de cada palabra.
function convertirMayusculas(cadena) {
  return cadena.toUpperCase().replace(/\b\w/g, letra => letra.toLowerCase());
}
// Obtener una cadena con todas las palabras en mayúsculas, excepto las palabras específicas.
function mayusculasExcepto(cadena, palabrasExcluidas) {
  // Convertir todas las palabras a mayúsculas
  let resultado = cadena.toUpperCase();
  
  // Crear una expresión regular para identificar las palabras excluidas
  let regex = new RegExp('\\b(' + palabrasExcluidas.join('|') + ')\\b', 'gi');
  
  // Reemplazar las palabras excluidas con su versión en minúsculas
  resultado = resultado.replace(regex, function(match) {
    return match.toLowerCase();
  });
  
  return resultado;
}
// Obtener una cadena con todas las palabras en minúsculas, excepto las palabras específicas.

// Reemplazar todas las ocurrencias de una expresión regular en una cadena.

// Convertir una cadena en un array utilizando una expresión regular como delimitador.

// Obtener la cantidad de ocurrencias de una expresión regular en una cadena.

// Obtener una cadena con los caracteres en orden alfabético, eliminando las repeticiones.

// Obtener una cadena con todos los caracteres numéricos eliminados.

// Obtener una cadena con todos los caracteres no numéricos eliminados.

// Obtener una cadena con todos los caracteres especiales eliminados.

// Convertir una cadena en un array de números utilizando un separador específico.

// Convertir una cadena en un array de objetos utilizando un separador específico.

// Obtener una cadena con los caracteres en orden inverso, pero manteniendo el orden de las palabras.

// Obtener una cadena con todas las palabras en orden inverso.

// Obtener una cadena con todas las palabras ordenadas alfabéticamente.

// Obtener una cadena con todas las palabras ordenadas alfabéticamente, eliminando las repeticiones.

// Obtener una cadena con todas las palabras que contienen una letra específica.

// Obtener una cadena con todas las palabras que no contienen una letra específica.
// Obtener una cadena con todas las palabras que comienzan con una letra específica



// Obtener una cadena con todas las palabras que terminan con una letra específica.

function palindrome(str) {
  let palindromo = str.split("").reverse().join("")
  console.log(palindromo)
  if(str === palindromo){
    return true
  }else{
    return false
  }
}

console.log(palindrome("eye"))
console.log(palindrome("eyes"))
console.log(palindrome("never odd or even"))