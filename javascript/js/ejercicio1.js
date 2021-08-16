'use strict'

var numero1 = parseInt(prompt("Ingrese un numero", 0));
var numero2 = parseInt(prompt("Ingrese un segundo numero", 0));

while(isNaN(numero1,numero2) || (numero1,numero2) <= 0){
    numero1 = parseInt(prompt("Ingrese un numero", 0));
    numero2 = parseInt(prompt("Ingrese un segundo numero", 0));
}

if(numero1 == numero2){
    alert("Los numeros son iguales'");
}
else if(numero1 > numero2){
    alert("El numero 1 es mayor al numero2");
}
else if(numero2 > numero1){
    alert("El numero 2 es mayor al numero1");
}
else{
    alert("Los numeros no son iguales");
}
