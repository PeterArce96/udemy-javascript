// CICLOS, repetir intrucciones varias veces

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0; //variable de control

// Se va cumplir mientras la CONDICIÓN sea VERDADERA
// while(i < carros.length){
//     console.log(carros[i]);
//     // i = i + 1;
//     i++;
// }

// CONDICIONES que haría que el while nunca se ejecute
// undefined
// null
// false

console.warn('While');
// OTRA FORMA
while( carros[i] ){
    if (i === 1){
        // break; hace que la ejecución termine
        i++; // tiene que ir aumentando si no se crea un ciclo infinito
        continue;
    }
    console.log(carros[i]);
    // i = i + 1;
    i++;
}

console.warn('Do While');
// Diferencia, el do while va ejecutar el bloque interno al menos 1 vez

let j = 0;
do {
    console.log(carros[j]);
    j++;

} while (carros[j]);