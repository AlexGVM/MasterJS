
$(document).ready(function () {
    $("#mostrar").hide()

    $("#mostrar").click(function (e) { 
       
        $(this).hide();
        $("#ocultar").show()
        //$("#caja").show('fast'); //poner la velocidad
        $("#caja").fadeIn('fast'); //para mostrar hace un efecto diferente
    });

    $("#ocultar").click(function (e) { 
       
        $(this).hide();
        $("#mostrar").show()
        $("#caja").fadeOut('fast'); //para ocultar hace un efecto diferente
        $("#caja").fadeTo('slow',0); //ir a transicion a 
    });

    $("#mostrar").click(function (e) { 
        $("#caja").Toggle('fast') //todo en un solo boton, mostrar y ocular
        $("#caja").fadeToggle('fast') //lo mismo pero diferente animacion
        $("#caja").slideToggle('fast') //otra animacion
        $("#caja").slideDown('fast') //para mostrar
        $("#caja").slideUp('fast') //para ocultar  con diferente animacion

        $("#caja").slideUp('fast',function(){
            console.log("El cartel se oculto") //que aparezca un mensaje cuando ya este escondido el cartel en el preciso momento.
        }) //para ocultar  con diferente animacion


     });

     var caja = $("#caja")

     $("#mostrar").click(function (e) { 
         //crear una animacion
         caja.animate({marginLeft:'500px',
            fontSize:'40px',
            height:'110px'                
        },'slow')
        .animate({borderRadius:'900px',
                marginTop:'80px'}
            ,'slow') //json //se mueve de una forma fluida

            .animate({borderRadius:'100px',
                marginTop:'0px'}
            ,'slow') //json //se mueve de una forma fluida
        .animate({marginLeft:'500px',
            fontSize:'40px',
            height:'110px'                
        },'slow')
            
     });


});