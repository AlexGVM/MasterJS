'use strict'

$(document).ready(function () {
    
    /*
    //MouseOver y MouseOut
    $('#caja').mouseover(function () { 
        $(this).css("background","red")
    });

    $('#caja').mouseout(function () { 
        $(this).css("background","green")
    });
    */

    //Hover

    var caja = $("#caja")

    $('#caja').hover(function () {
            // over
            $(this).css("background","red")
        }, function () {
            // out
            $(this).css("background","green")
        }
    );

    //Click  y DobleClick

    $("#caja").click(function (e) { 
        $(this).css("background","blue").css("color","white")
        
    });

    caja.dblclick(function () {
        $(this).css("background","pink").css("color","yellow")
    })

    //Focus y blur

    var nombre = $("#nombre")

    $(nombre).focus(function () { 
        $(this).css("border", "2px solid green");
        
    });

    $(nombre).blur(function () { 
        $(this).css("border", "2px solid transparent");
        $(this).val(); //sacar la info
        $("#datos").text($(this).val()).show(); //para meter en el cuadro el valor ingresado en el text
    });

    //mousedown and mouseup

    var datos = $("#datos");

    $(datos).mousedown(function () { 
        $(this).css("border-color","gray")
    });

    $(datos).mouseup(function () { 
        $(this).css("border-color","green")
    });

    //mouse move

    $(document).mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        console.log(e.clientX + "  " +e.clientY)
        $("body").css("cursor","none") //ocultar el cursor
        $("#sigueme").css("left",e.clientX);
        $("#sigueme").css("top",e.clientY);
    });

});