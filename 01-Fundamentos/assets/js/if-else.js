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

// Sin usar IF Else, o Switch, únicamente objetos


// Con Objetos
const diaSemana = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",

}

// día de la semana
console.log('Día: ', diaSemana[0] || 'Día no definido');
//Ponemos el || que significa 'o', para cuando pongan un número de día que no es del 0 al 7, por ejemplo 10

// Para hacer procedimiento podemos ponerle funciones a las propiedades del objeto.
const diaSemana2 = {
    0: () => "Domingo - 0",
    1: () => "Lunes - 1",
    2: () => "Martes - 2",
    3: () => "Miércoles - 3",
    4: () => "Jueves - 4",
    5: () => "Viernes - 5",
    6: () => "Sábado - 6",

}
console.log(diaSemana2[3]()) //ejecutar la función con ()

// Con Arreglos
const diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

console.log('Día: ', diaLetras[dia] || 'Día no definido');