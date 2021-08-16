'use strict'

//Let y var

//PRUEBA CON VAR
let prueba = "hola";
var numero = 40;
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero);
}

console.log(numero);

//PRUEBA CON LET

var texto = "Curso JS";
console.log(texto); 

if(true){
    let texto = "Curso JS Guatemala"; //variable local en ese bloque de codigo solamente
    console.log(texto); 
}

console.log(texto); //Curso JS



// definir variables limitando en donde se usan
// var define una variable global 




