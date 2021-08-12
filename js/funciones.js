'use strict'

//Funciones

//Conjunto de reglas en las cuales se puede utilizar varias veces
//definir la funcion

console.log(calculadora());

function calculadora(num1,num2, mostrar = false){ //mostrar = false = [parametro opcional]
    if(mostrar == false){
        porConsola(5,5)
    }
    else{
        porPantalla(5,5)
    }
}

var resultado = calculadora(4,8)//llamar la funcion
console.log(resulado);

function porConsola(numero1,numero2){
    console.log("Suma" + (10+15));
    console.log("-" + (10+15));
    console.log("*" + (10+15));
    console.log("/" + (10+15));
    console.log("Si soy yo");
}
function porPantalla(numero1,numero2){
    console.log("Suma" + (10+15));
    console.log("-" + (10+15));
    console.log("*" + (10+15));
    console.log("/" + (10+15));
    console.log("Si soy yo");
} 

