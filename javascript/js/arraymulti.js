'use strict'

var categorias = ['Accion','Terror','Comedia'];
var peliculas = ['La verdad duele','La vida es bella','rapido y furiosos'];

var cine = [categorias,peliculas];

console.log(cine);

cine[0] //entrar a categoria
cine[0][1] //categoria terror

peliculas.push("Batman"); //añadir al array

peliculas.pop(); //para eliminar el ultimo elemento

var indice = peliculas.indexOf('La vida es bella') //para saber en donde esta la palabrsa 

if(indice > -1){
    peliculas.splice(indice,1) //envace a un indice poder saber cuantos quiere borrar despues 
}

peliculas.sort(); //ordenar por orden alfabetico
peliculas.reverse(); //para darle la vuelta


//array a texto
var peliculasS = peliculas.join(); //string separado por comas, se tiene que guardar en otra variable

var cadena = "texto1 texto2 texto3"
var cadenaA = cadena.split(" ")


for (const key in peliculas) {
    console.log(peliculas[key])
}



// BUSQUEDAS

var busqueda = lenguaje.find(lenguajes => lenguajes == "PHP"); 
var busqueda1 = lenguaje.indexOf(lenguajes => lenguajes == "PHP");
var precios = [10,20,50,80,12];
var precios2 = precios.some(precio => precio  >= 20); //comprobar si algun precio es mayor o igual a algo
































