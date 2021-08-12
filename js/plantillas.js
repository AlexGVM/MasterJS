'use strict'

 //Plantillas de texto

 var nombre = prompt("Ingrese un nombre");
 var apellidos = prompt("Ingrese tus apellidos");

 var texto = "Mi nombre es: " + nombre + " <br> Mis apellidos son: " + apellidos;

var texto1 = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre} </h3>
    <h3>Mis apellidos son: ${apellidos} </h3>
`
//PLANTILLAS

 document.write(texto1);