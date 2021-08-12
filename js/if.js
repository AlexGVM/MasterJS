'use strict'

//if = Si A es igual a B haz algo

//si pasa esto ejecuta lo otro

var edad1 = 30;
var edad2 = 12;
var nombre = 'Alexander Villatoro'

//Operadaores relacionales = == > < >= <= !=

if(edad1 <= 18){
    //Ejecuta esto
    console.log('El usuario es de mayor de edad');
}
else if(edad1 == 30){
    console.log("Tiene la edad de 30");
}
else{
    console.log("El usuario es de menor de dedad");
}

//Operadores Logicos
//and (&&) = y, or = o (||), Negacion = ! 

var year = 2018
if(year != 2016 && !(year == 2021)){
    //do something
}
if(year != 2016 || !(year == 2021)){
    //do something
}