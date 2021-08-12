'use strict'

function holaMundo(texto){
    var hola_mundo = "Dentro de funcion"

    console.log(hola_mundo);
    console.log(texto);
    console.log(numero.toString());// para que sea a un string //ya que es global la varibale 
}
console.log(hola_mundo); // no se puede llamar ya que esta dentro de la funcion no esta como global
var hola = "Hola Mundo soy una varible global"; 
var numero = 12;
holaMundo(hola);