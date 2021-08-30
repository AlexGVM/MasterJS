//Clase = varios objetos de ese tipo o metodos

var bicicleta = {
    
    color: "Rojo",
    modelo: "BMX",
    frenos: "De disco",
    VelocidadMaxima: "60km/h",
    cambiarColor:function (nuevoColor) {
        //bicicleta.color = nuevoColor;
        this.color = nuevoColor;
        console.log(this);
    }

};

bicicleta.cambiarColor('azul');
