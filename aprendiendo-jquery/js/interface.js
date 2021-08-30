$(document).ready(function () {

    //Mover elemento por la pagina
    $(".elemento").draggable(); //mover los elementos
   
    //Redimensionar
    //Mover elemento por la pagina
    $(".elemento").resizable();

    //Seleccionar elementos
    //$(".lista").selectable();

    //Ordenar los elementos 
    $(".lista").sortable({
        update: function (event,ui) {
            console.log("Ha cambiado la lista", event)
        }
    }); //no se puede usar con el selectable

    //Drop
    $("#movido").draggable();
    $("#area").droppable({
        drop: function (params) {
            console.log("Has solatdo algo dentro del area")
        }
    });

    //Efectos
    $("#mostrar").click(function (params) {
        $(".caja-efectos").toggle("shake",400); //muchos efectos
    })

    $(document).tooltip()

    //Dialog
    $("#lanzar").click(function name(params) {
        $("#popup").dialog()    
    })

    $("#calendario").datepicker()

    //Tbas
    $("#pestanas").tabs()
    


});