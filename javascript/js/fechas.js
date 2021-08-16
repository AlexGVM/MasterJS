'use strict'

var fecha = new Date();
var year = fecha.getFullYear()
var textohora = `
    El año es: ${year}
    El mes es: ${fecha.getMonth()} //empezando por 0
    EL dia es: ${fecha.getDate()}
    La hora es: ${fecha.getHours()} 
`;

console.log(textohora);

console.log(Math.random()) //decimal
console.log(Math.random()*10) //para que tenga una cifra m;as y si se quieren dos cifras *100
//ceil == redondear