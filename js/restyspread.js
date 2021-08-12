'use strict'

//Parametro REST y SPREAD

function listadoFrutas(fruta1,fruta2, ...resto){ //rest = todos los valores que se le pasa en un array para despues demostrarlo
    console.log("Fruta1: "+ fruta1);
    console.log("Fruta2: "+ fruta2);
}

var frutas = ['Naranja','Manzana']
listadoFrutas(...frutas,"sandia","pera","melon","coco"); //SPREAD = lo mismo que rest pero al contrario los ... en la variable que
// se va a meter como parametro


