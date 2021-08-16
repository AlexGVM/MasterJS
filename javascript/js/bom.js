'use strict'

//BOM = BROWSER OBJECT MODEL

function getBOM(){
    console.log(window.innerHeight); //saber altura tiene la ventana del navegador
    console.log(window.innerWidth);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location) //saber el url de la pagina
    console.log();
}
function redirect(url){
    window.location.href = url //redirigir a otra pagina
}

function openwindow(url){
    window.open(url); //abre una pestaña nueva 
}

getBOM();