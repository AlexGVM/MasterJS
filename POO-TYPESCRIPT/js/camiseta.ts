//Interfaz
//metodos obligatorios
interface CamisetBase{
    setColor(Color); //siempre llamar al metodo en la clase para que cumpla con el contrato
    getColor();
}

//Decorador

function estampar(logo:string) {
    return function (target:Function) {
        target.prototype.estampación = function ():void {
            console.log("Camiseta estampada con el logo de " + logo);
            
        }
    }
}


// Clase (molde del objeto)
//export = exportar la clase
//@estampar("Gucci Gang") //aplicar del decorador a una clase
class Camiseta implements CamisetBase { //siempre comenzar con mayuscula y que tenga el mismo nombre que el archivo
    
    //Propiedades (caracteristicas del objeto)
    private color: string; //string = "algo"
    private modelo: string; //public, private =  desde la clase que lo define, protected = se puede acceder al atributo en la clase o que lo herede
    private marca: string;
    private talla: string;
    private precio: number;


    //Metodos (funciones o acciones que del objeto)

    constructor(color, modelo,marca,talla,precio){
        this.color =  color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;    
    }

}  

//Clase hija
//extends = heredar
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha
    }
    getCapucha():boolean{
        return this.capucha
    }
} 

var sudaderaNike = new Sudadera("Rojo","Manga larga","nike","l",14); //necesita las propiedades de camiseta
sudaderaNike.setCapucha(true); //usar el metodo de setCapucha
sudaderaNike.setColor("azul");

var camiseta =  new Camiseta("rojo","manga larga","nike","L",14);
//camiseta.estampación ;
console.log(camiseta);

/*
var camiseta = new Camiseta("rojo","manga larga","nike","L","14");

console.log(camiseta)

camiseta.cambiarColor("azul");
camiseta.getColor();

camiseta.color = "Rojo";
*/



