'use strict'

alert("hola");

//Fetch (ajax) y peticiones a servicios / apis rest 
var usuarios = [];
var div = document.querySelector('#usuarios');

fetch('https://jsonplaceholder.typicode.com/users') //se ingresa una url que sea json //promesa  //primera promesa, capturar los datos
    .then(data => data.json()) // convertir a json //la funcion de flecha ya te hace el return
    .then(data => {  //guardar
        usuarios = data;
        console.log(usuarios);

        usuarios.map((user,i)=>{
            let nombre = document.createElement('h2')
            nombre.innerHTML = i + " "+ user.name + " " + user.website
            div.append(nombre);
            
        })

        return getInfo()

    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {//poder capturar errores
        console.log(error) //poder capturar errores
    }); //poder capturar errores


function getInfo(){ //crear una promesa desde 0
    var profesor = {
        nombre: "Alex", 
        apellidos: "Villatoro",
        url: "www.google.com"
    };
    return new Promise((resolve,reject) => {
        var profesor_string = JSON.stringify(profesor);
        if(typeof profesor_string != "string"){
            return reject("error");
        }
        else{
            return resolve(profesor_string);
        }

    })
    
    
}

