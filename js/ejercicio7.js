'use strict'

var numero = parseInt(prompt("Ingrese un numero", 0));

for(var i = 1 ; i <= 10 ; i++){ //los for se dividen con punto y coma
    document.write("<h1>" + numero + " " + " * " + i + " = " + numero*i + "</h1>"); //para escribir en el navegador con html5
}