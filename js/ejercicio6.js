'use strict'

var numero = parseInt(prompt("Ingrese un numero", 0));


while(isNaN(numero)){
    numero = parseInt(prompt("Ingrese un numero", 0));
}

if(numero % 2 == 0){
    console.log("El numero es par: " + numero);
}
else{
    console.log("El numero es impar: " + numero);
}
