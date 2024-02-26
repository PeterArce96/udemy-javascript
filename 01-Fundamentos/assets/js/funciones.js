
// Es recomendable declarar las funciones arriba y llamarlas debajo del código.
// Todas las funciones tradicionales (que tengan la palabra "function" a la hora de declararla, tienen un objeto implicito llamado "arguments")
// nombre es un argumento
function saludar(nombre) {
    // console.log(arguments)
    // console.log('Hola ' + nombre);
    return [1,2,3,4,5];

    // Las funciones no ejecutan nada después del RETURN,
    // nunca se va a ejecutar
    console.log('Soy un códifo que está después del return')
}

// FUNCIÓN ANÓNIMA
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

// FUNCIÓN FLECHA
const saludarFlecha = () => {
    console.log('Hola Flecha')
}

// FUNCIÓN FLECHA CON ARGUMENTOS
// si solo hay un argumento, los paréntesis se pueden obviar
const saludarFlecha2 = ( nombre ) => {
    console.log('Hola '+ nombre)
}

const retornoDeSaludar = saludar('Peter', 40, true, 'Costa Rica'); //1
console.log(retornoDeSaludar)

// saludar2('Peter');

// saludarFlecha();
// saludarFlecha2('Joseph')

function sumar(a, b) {
    return a+b;
}
// Flecha
// const sumar2 = (a,b) => {
//     return a+b;
// }

// función flecha resumida
// cuando la única línea dentro de la función es el return
const sumar2 = (a,b) => a+b;

console.log(sumar(1,2))
console.log(sumar2(1,2))

// Función que retorna un número aleatorio
function getAleatorio() {
    return Math.random()*100;
}

// Función Flecha
const getAleatorio2 = () => Math.random()*100;

console.log(getAleatorio());
console.log(getAleatorio2());