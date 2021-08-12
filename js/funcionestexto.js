'use strict'

//Transformacion de textos

var numero = 444
var texto1 = "Bienvenido al curso de Javascript";
var texto2 = "Es muy buen curso"

//numero a un string

var dato = numero.toString();
dato = texto1.toUpperCase() //mayusculas
dato = texto1.toLowerCase() //minusculas
daato = texto2.toUpperCase()

console.log(dato);

//calcular longitud

var nombre = "Hola Mundos";
nombre = ['sdf','sfds'] //contar la cantidad de elementos en algo 

console.log(nombre.length); //saber la longitud de un string

//Concatenar unir textos

var textoT = texto1 + " " +texto2; //concatenar
var textoTotal = texto1.concat(" "+ texto2);
console.log(textoT);

