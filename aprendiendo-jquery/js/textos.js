'use strict'

$(document).ready(function () {
    
    reloadLinks();
    
    $("#add_button").click(function () { 
        $("#menu").prepend('<li><a href ="'+ $("#add_link").val() + '"></a></li>'); //html = incrustar en el html
        $("#add_link").val('')
        reloadLinks()
    });
    
    
    


});

function reloadLinks(params) {
    $("a").each(function (indexInArray, valueOfElement) { 
        var that = $(this)
        var enlace = $(this).attr("href") //conseguir el valor que tiene el href
        that.attr('target',"_blank") // abrir en una nueva pestaña
        //that.removeAttr(attributeName); //eliminar un atributo 
        
        that.text(enlace) //ponerlo en el DOM como texto

    });

}