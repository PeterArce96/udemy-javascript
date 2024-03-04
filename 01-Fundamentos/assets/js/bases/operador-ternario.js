/*
Días de semana abrimos a las 11,
pero los fines de semana a las 9

*/

// Entra a un sitio web para consultar si está abierto hoy...

// MODO SIN TERNARIO, CON IF
const dia = 0; //0: domingo, ... 1: Lunes...
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// if ([0,6].includes(dia))
// if (dia === 0 || dia === 6){
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }

// if (horaActual >= horaApertura){
//     mensaje = 'Está abierto';
// }else{
//     mensaje = `Está cerrado, abrimos a las ${horaApertura}`;
// }

// console.log({horaApertura, mensaje})

// CON TERNARIO
// Si el día está incluido en el 0 o 6, hora de apertura es 9, si no se cumple es 11
horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Está cerrado abrimos a las ${horaApertura}`

console.log({horaApertura, mensaje})