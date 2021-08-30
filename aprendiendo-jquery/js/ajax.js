'use strict'

$(document).ready(function () {
    
    /*

    //Load

    $("#datos").load("https://reqres.in/");

    $("#datos").load("https://reqres.in/", "data", function (response, status, request) {
        this; // dom element
        
    });


    

    //GET Y POST

    $.get("https://reqres.in/api/users?page=2",
        function (response) {
            response.data.forEach(element => {
                $("#datos").append("<p>" + element.first_name + "</p>"); //meterlo en el html
            });
        },
        
    );

    */

    $("#formulario").submit(function (e) { 
        e.preventDefault(); //para no redirigir
        /*
        
        var usuario = {

            name: $('input[name="name"]').val(),
            "web": $('input[name="web"]').val()
        }
        console.log(usuario)
    
        $.post($(this).attr("action"), usuario, //ya crear el usuario
            function (response) {
                console.log(response)
    
            },
            
        ).done(function () {
            alert("usuario añadaido correctamente")
        });

        */

        var usuario = {

            name: $('input[name="name"]').val(),
            "web": $('input[name="web"]').val()
        }

        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: usuario,
            dataType: "json",
            beforeSend: function(){
                console.log("Enviando Usuario...")
            },
            success: function (response) {
              console.log(response)  
            },
            error: function (params) {
                console.log("A ocurrido un error")
            },
            timeout: 2000
            
        });
        
    });


});