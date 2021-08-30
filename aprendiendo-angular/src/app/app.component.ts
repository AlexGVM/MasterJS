import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({ //decorador
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo-angular';
  public mostrarV: boolean = true;
  public descripcion: string;
  public color: string;
  public config: any;

  constructor(){
    this.title = configuracion.titulo;
    this.color = configuracion.color;
    this.config = configuracion;
    this.descripcion = configuracion.descripcion;
  }


  ocultarV(botonMO:boolean){
    this.mostrarV = botonMO;
  }

}
