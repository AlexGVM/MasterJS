'use strict'

//Timers y load 

window.addEventListener('load', function(){
    //Timers
    
    function intervalo(){

        var tiempo = setInterval(function(){
            console.log("Set interval ejecutado");
            
            var encabezado = document.querySelector("h1")
            if(encabezado.style.fontSize == "50px"){
                document.querySelector("h1").style.fontSize = "20px";
            }
            else{
                document.querySelector("h1").style.fontSize = "50px"
            }
            
        }, 2000) //parametro de cuanto se va a tardar en ejecutar // se mira por miles para los segundos
    
        return tiempo;
    }
    
    var tiempo = intervalo();
    
    var tiempo1 = setTimeout(function(){ //solo se ejecuta una vez
        console.log("Set interval ejecutado");
        
        var encabezado = document.querySelector("h1")
        if(encabezado.style.fontSize = "50px"){
            document.querySelector("h1").style.fontSize = "20px";
        }
        else{
            document.querySelector("h1").style.fontSize = "50px"
        }
        
    }, 5000) //parametro de cuanto se va a tardar en ejecutar // se mira por miles para los segundos

    var stop = this.document.querySelector("#stop")
    stop.addEventListener('click',function(){ // cuando se haga click hacer que este se pare el interval
        alert("Haz parado el intervalo en bucle.")
        clearInterval(tiempo);
    })

    var start = this.document.querySelector("#iniciar")
    start.addEventListener('click',function(){ // cuando se haga click hacer que este se pare el interval
        alert("Haz iniciado el intervalo en bucle.")
        intervalo();
    })

})