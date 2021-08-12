'use strict'

var num1 = parseInt(prompt("Ingrese el primer numero: ",0)); 
var num2 = parseInt(prompt("Ingrese el segundo numero: ",0));

while(isNaN(num1) || isNaN(num2) || num1 == 0 || num2 == 0 ){
    num1 = parseInt(prompt("Ingrese el primer numero: ",0)); 
    num2 = parseInt(prompt("Ingrese el segundo numero: ",0));
}

var resultado = num1 + num2; 
console.log("La suma de los numeros es: " + resultado); // ES MEJOR CREAR UNA VARIABLE EN DONDE SE ESTARAN HACIENDO LAS OPERACIONES, QUE ESTAR HACIENDO LAS OPERACIONES COMO UN PARAMETRO COMO TAL
alert("La suma de los numeros es: " + resultado);
document.write("<h1>" + "La suma de los numeros es: " + resultado + "</h1>");
resultado = num1 - num2
console.log("La resta de los numeros es: " + resultado);
alert("La resta de los numeros es: " + resultado);
document.write("<h1>" + "La resta de los numeros es: " + resultado + "</h1>");
resultado = num1 * num2;
console.log("La multiplicacion de los numeros es: " + resultado);
alert("La multiplicacion de los numeros es: " + resultado);
document.write("<h1>" + "La multiplicacion de los numeros es: " + resultado + "</h1>");
resultado = num1 / num2;
console.log("La division de los numeros es: " + resultado);
alert("La division de los numeros es: " + resultado);
document.write("<h1>" + "La division de los numeros es: " + resultado + "</h1>");

