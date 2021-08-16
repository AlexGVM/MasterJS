'use strict'

// Funcion anonima = funcion que no tiene nombre

//Es una funcion que no tiene nombre

var pelicula = function(nombre){
    return "La pelicula es:" + nombre;
}

pelicula("Rapido y furiosos 9");

function sumame(num1,num2,sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar
}

sumame(5,7,dato => {
    console.log("La suma es:",dato);
},
dato => {
    console.log("La suma por dos es: ", (dato*2))
}
);
//callback = una funcion anonima que se la pasa como parametro otra funcion