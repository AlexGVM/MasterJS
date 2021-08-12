'use strict'

var numero = parseInt(prompt("Ingrese un numero",0));
var total = 0;
var contador = 0;

while(numero >= 0){
    total += numero;
    contador++
    numero = parseInt(prompt("Ingrese un numero",0));
}

alert("El total de la suma es: " + total);
alert("La media es: " + total/contador);