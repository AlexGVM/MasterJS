'use strict'

// Evento del raton

window.addEventListener('load',function(){ //cuando la pagina ya esta cargada se ejecuta el load.

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
        this.style.height = "50px"
    });
    
    //Mouse out
    
    
    boton.addEventListener('mouseout',function(){
        // do something
        boton.style.background = "black"
    });
    
    //Focus = dentro del input
    
    var input = document.querySelector('#camponombre');
    
    input.addEventListener('focus',function(){
        console.log('Estas haciendo foco en el input');
    });
    
    //Blur
    
    var input = document.querySelector('#camponombre');
    
    input.addEventListener('blur',function(){
        console.log('Estas afuera del foco en el input');
    });
    
    //Keydown
    
    var input = document.querySelector('#camponombre');
    
    input.addEventListener('keydown',function(event){
        console.log('Haz pulsado alguna tecla', String.fromCharCode(event.keyCode)); //para poder capturar que lo se esta escribiendo en el input
    });
    
    
    //Keypress
    
    var input = document.querySelector('#camponombre');
    
    input.addEventListener('keypress',function(event){
        console.log('Tecla presionada', String.fromCharCode(event.keyCode)); //para poder capturar que lo se esta escribiendo en el input
    });
    
    //Keyup
    
    var input = document.querySelector('#camponombre');
    
    input.addEventListener('keyup',function(event){
        console.log('Tecla soltada', String.fromCharCode(event.keyCode)); //para poder capturar que lo se esta escribiendo en el input
    });

    //this = 
    1
    

}); //final de load



