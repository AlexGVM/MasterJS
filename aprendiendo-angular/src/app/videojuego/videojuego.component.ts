import {Component, OnInit, DoCheck,OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent implements OnInit, DoCheck,OnDestroy{ //DoCheck si se produce algun cambio, se ejecuta

    public titulo:string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de videojuegos"
        this.listado = "Listado de los juegos más populares"
        //console.log("Se ha cargado el componente Videojuego")
    }

    ngOnInit(){
        //console.log("Oninit Ejecutado")
    }
    ngDoCheck(){
        //console.log("DoCheck ejecutado")
    }
    ngOnDestroy(){ //ejecutar antes de eleminar algo
        //console.log("OnDestroy Ejecutado...");
        
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente"
    }
        
    
}