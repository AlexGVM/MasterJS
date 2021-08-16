'use strict'


var numero = 444
var texto1 = "Bienvenido al curso de Javascript";
var texto2 = "Es muy buen curso"

var busqueda = texto1.replace("curso", "hola"); //cambiar una cadena de texto
busqueda = texto1.slice(14,22); //varios parametros //separa un string apartir de un caracter
busqueda = texto1.split(); //separaar , se puede usar parametros para saber como hacer la separacion
busqueda = texto1.trim(); //quitar los espacios por delante y por detras

console.log(busqueda);