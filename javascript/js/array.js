'use strict'

//arreglos, arrays, matrices

var nombre = "Victor Robles"
var nombres = ["Vixtor","Alex","Ale","Andrea",5,true]

var lenguajes = new Array("PHP","GO","Python") //objeto

nombres[2] //acceder a esa posicion del array

nombres.length // para poder saber la longitud del array

var elemento = parseInt(prompt("Que elemento del array quieres??",0));

if(elemento >= nombres.length){
    alert("Introduce un numero correcto, menor que "+ nombres.length)
}
else{
    alert(nombres[elemento]);
}

document.write("<h1> Lenguajes de programacion del 2018 </h1>")

for(var i = 0 ; i < nombres.length; i++){
    lenguajes[i]
}

//foreach

nombres.forEach((element,index,arr) => {
    element //ya lo recorre más facil y 
    index //que posicion se esta recorriendo
    arr //saber que cosa tiene adentro
});
