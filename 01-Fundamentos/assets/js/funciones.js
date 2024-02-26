
// Es recomendable declarar las funciones arriba y llamarlas debajo del código.
// Todas las funciones tradicionales (que tengan la palabra "function" a la hora de declararla, tienen un objeto implicito llamado "arguments")
// nombre es un argumento
function saludar(nombre) {
    console.log(arguments)
    console.log('Hola ' + nombre);
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

saludar('Peter', 40, true, 'Costa Rica');
// saludar2('Peter');
saludarFlecha();
saludarFlecha2('Joseph')