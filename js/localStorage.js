'use strict'

//LocalStorage 

//Ver si el navegador es compatible

if(typeof Storage != 'undefined'){
    console.log("LocalStorage disponible")
}
else{
    console.log("No compatible")
}

//Guardar datos en el loscalstorage

localStorage.setItem("titulo", "curso de JS");

//Recuperar un elemento

var dato = localStorage.getItem("titulo");
document.querySelector("#peliculasdiv").innerHTML = localStorage.getItem("titulo");

//Guardar objetos

var usuario = {
    nombre: "Alex",
    email: "sfsadgsdga@gmail.com",
    web: "google.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario)); // es necesrio convertir los datos a un string.
//json.stringify == convertir la variable a un JSON

//Recuperar el objeto
console.log(JSON.parse(localStorage.getItem("usuario"))); //convertir de JSON a objeto

//Borrar
localStorage.removeItem("usuario");

//vaciar todo

localStorage.clear();