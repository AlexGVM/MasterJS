//string

type letrasonumeros = string | number ; //hacer un tipo de dato


let cadena: string = "AlexanderVillatoro" //definir un string

let cadena1: letrasonumeros = "AlexanderVillatoro" //definir un string

cadena1 = 45;

//number

let numero: number = 12;

//numero = "hola" //sale error pero en la pagina si sale bien

//Boleando

let vf: boolean = true;

//any

let cualquiera: any = "hola";


//Arrays

var lenguajes: Array<string> = ["PHP","JS","PYTHON"]
var lenguajes1: Array<any> = ["PHP","JS","PYTHON",6546]

let years: number[] = [4564,546456,564,564,654,] //otra forma de hacerlo

//let a nivel de bloque


//Let uv var

var numero1 = 10;
var numero2 = 12;

if (numero1 == 10) {
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1,numero2);
    
}


console.log(cadena);

