'use strict'

//JSON = JavaScript Object Notatiom

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: "Estados Unidos"
}

var peliculas = [ //array de objetos
    {titulo: "La verdad duele",year: 2016, pais: "Francia"},
    pelicula,
    {titulo: "Aquaman",year: 2019, pais:"Estados Unidos"}
];

var peliculasdiv = document.querySelector("#peliculasdiv");

for (const index in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[index].titulo);
    peliculasdiv.append(p);
}


console.log(peliculas);
pelicula.pais //acceder a una parte del objeto

pelicula.titulo = "Superman Begins"; //cambiar de titulo