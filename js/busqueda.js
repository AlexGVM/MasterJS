'use strict'

var numero = 444
var texto1 = "Bienvenido al curso de Javascript";
var texto2 = "Es muy buen curso"

var busqueda = texto1.indexOf("curso"); //buscar la posicion en donde esta esa palabra
busqueda = texto1.search("curso");
busqueda = texto1.match("curso"); //un array de los resultados encontrados 
busqueda = texto1.match(/curso/gi); //expresion regular
busqueda = texto1.substr(14,5); //desde el caracter 14 hasta cinco caracteres más //substring
busqueda = texto1.charAt(44); //sacar una letra en concreto
busqueda = texto1.startsWith("curso"); //buscar el texto bool para ver si lo encuentra o no pero desde el principio de la cadena
busqueda = texto1.endsWith(); //para buscar algo al final
busqueda = texto1.includes("curso"); //buscar la palabra es key sensitive

console.log(busqueda);