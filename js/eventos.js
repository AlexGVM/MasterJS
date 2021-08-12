'use strict'

// Evento del raton


function cambiarColor(){
    console.log("Me has presionado")
    var bg = boton.style.background;
    if(boton.style.background == "green"){
        boton.style.background = "red" 
       
    }
    else{
        boton.style.background = "green"
    } 

    boton.style.padding = "10px"
    boton.style.boder = "1px solid #ccc"
}

var boton = document.getElementById("boton");
boton.addEventListener('click', function(){ //callback
    cambiarColor()
})

//Mouse over

boton.addEventListener('mouseover',function(){
    // do something
    boton.style.background = "#ccc"
});

//Mouse out


boton.addEventListener('mouseout',function(){
    // do something
    boton.style.background = "black"
});