'use strict'

//DOM = DOCUMENT OBJECT MODEL

function cambiacolor(color){
    caja1.style.background = color;
}


//Conseguir elementos con un ID concreto

//var caja = document.getElementsByClassName("hola");
var caja =  document.querySelector("#micaja"); //id // clase = #.micaja


//console.log(caja[0]); //esto es con clases, es más facil usar clases = casi no se puede hacer nada con la clase
var caja1 = document.getElementById("cosa");
caja1.innerHTML = "TEXTO EN LA CAJA DESDE JS"
//caja1.style.background = "red";
caja1.style.padding = "20px"
caja1.style.color = "white"; 
caja1.className = "que onda"


//Conseguir elementos por su etiqueta 

var todoslosdivs = document.getElementsByTagName('div');
console.log(todoslosdivs);

var contenidotexto = todoslosdivs[2].textContent; //sacar el contenido que tiene el div
contenidotexto = todoslosdivs[2].innerHTML; //sacar el contenido que tiene el div pero se le puede asignar un nuevo valor

//todoslosdivs.forEach((valor,indice) => { //solo funciona con array que creamos nosotros con valores
var valor
for(valor in todoslosdivs){
    console.log(valor);
    if( typeof todoslosdivs[valor].textContent == 'string' ){
        var parrafo = document.createElement("p"); //crea el tag para el html
        var texto = document.createTextNode(todoslosdivs[valor].textContent); //convierte a texto lo que esta en valor con el textcontent
        parrafo.appendChild(texto); //agregar a una lista
        console.log(parrafo);
        document.getElementById("miseccion").appendChild(parrafo); //agregar la lista al html
    }
    

}


//console.log(contenidotexto);


//Conseguir elemento por su clase

var divsrojos = document.getElementsByClassName("rojo");
divsrojos[0].style.background = "red"
divsrojos[1].style.background = "red"

for (var div in divsrojos) {
    if (typeof divsrojos[div] == "string"){
        divsrojos[div].style.background = "red";
    }
}

console.log(divsrojos);


//console.log(caja1); //esto es con id, solo con este se puede saber el texto en el html

//Query Selector

var id = document.querySelector("#encabezado") //id
console.log(id);
var clasrojo = document.querySelector("div.rojo") //class y div