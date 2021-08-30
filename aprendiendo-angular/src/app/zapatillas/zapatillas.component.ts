import { templateJitUrl } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: "zapatillas",
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{

    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: Array<string>;
    public color:string;

    constructor(){
        this.titulo = "Zapatillas"
        this.color = "yellow";
        this.marcas = new Array; //inicializar
        this.zapatillas = [
            new Zapatilla('Reebok Classic',80,'Reebok','Blanco',true),
            new Zapatilla('Adidas Classic',110,'Adidas','Blanco',true),
            new Zapatilla('Nike Classic',100,'Nike','Blanco',false),
            new Zapatilla('Nike new',100,'Nike','Negro',false)
        ]
    }
    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas()
        
    }

    getMarcas(){
        this.zapatillas.forEach((value, index) =>{
            if(this.marcas.indexOf(value.marca) < 0){
                this.marcas.push(value.marca);
            }
            
        })
        console.log(this.marcas);
        
    }
}
