'use strict'

// $ y jQuery = hace referencia de que estamoa hablando sobre jQuery

// despues de $ se pone un selector o evento

$(document).ready(function () {
    //Selector de ID
    var rojo  = $("#rojo").css("background", "red").css("color","white") //# = id . = clase //se puede encadenar más .css

    var amarillo  = $("#amarillo").css("background", "yellow").css("color","black") //# = id . = clase //se puede encadenar más .css

    var verde  = $("#verde").css("background", "green").css("color","black") //# = id . = clase //se puede encadenar más .css
    
    var miclase = $(".zebra");
    miclase.css("border","5px dashed black")
    miclase.addClass("zebra")
    
    $(".sinborde").click(function () { 
        console.log("Click dado")
        $(this).addClass("zebra");
     })

     //selectores de etiqueta
     var parrafos = $("p");
     parrafos.click(function(){
         console.log("Le he dado Click")
         var that = $(this);
         if($(this).hasClass("zebra")){
            $(this).removeClass("zebra");
         }
         else{
            $(this).addClass("zebra")
         }
         
     })

     //Selectores de atributo
     $('[title="Google"]').css("background","#ccc") //atributos
     $('[title="Facebook"]').css('background','blue')
    
    //Selectores Otros

    $('p,a').addClass('margen-superior')
    var busqueda = $("#caja").find('.resaltado') //buscar el DOM completo y encontrar los elementos
    $('#caja .resaltado') //otra forma
    $('#caja .resaltado').parent() //salir a donde esta el padre a uno anterior a 
});