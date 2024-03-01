// ESTRUCTURAS DE CONTROL

let a = 5;

//si se cumple la condición, imprime lo sguiente
if( a >= 10 ){ //se manda un valor booleano, pero hay excepciones como el undefined, null, una asignación.
    console.log('A es mayor o igual a 10');
} else{
    console.log('A es menor a 10')
}

// console.log('Fin de programa')

// el new me permite crear una nueva instancia del objeto Date
// Date obtiene la información del momento actual
const hoy = new Date();
let dia = hoy.getDay(); //0- Domingo, 1-lunes, 2-Martes, 3- miercoles, ....

console.log(dia);

// Cuando se usan CONDICIONES, nunca se usa el "=" de asignación, si ponemos un "==", solo lo toma como un valor, podemos poner el 4 como string '4', e igual lo acepta porque tiene el mismo valor, pero con el "===", si importa el tipo de dato
if ( dia === 4 ){
    console.log('Jueves');
}else {
    console.log('No es Jueves');
}

// 4 === '4' // false

// CONDICIONES ANIDADAS
if ( dia === 4 ){
    console.log('Jueves');
}else if (dia === 1){
    console.log('Lunes');
}else if (dia === 2){
    console.log('Martes');
}else {
    console.log('No es Lunes, Martes ni Domingo')
}