// console.log(miNombre);

// Los siguientes 3 métodos vienen en el objeto WINDOW
// ALERT, PROMPT, CONFIRM

// alert('Hola Mundo'); 
//intrucción bloqueante, bloquea la ejecución del navegador web hasta que el usuario haga clic en aceptar

// let nombre = prompt("¿Cuál es tu nombre?", 'Sin nombre');
// let nombre = prompt("¿Cuál es tu nombre?");
// prompt() --> muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto (STRING).

// console.log(nombre)
// console.log('*****' + nombre + '****');
// Si en caso no se coloca nada en el prompt, la consola regresa algo llamado "string vacío"
// Pero si seleccionamos cancelar, el string a regresar es 'NULL', en la primer impresión va mostrar un valor nulo, la segunda impresión si muestra un "String"

const seleccion = confirm('¿Estás seguro de borrar esto?');
console.log(seleccion);
// Si colocamos Aceptar nos regresará el booleando 'TRUE', si colocamos Cancelar nos regresa 'False'