
const  regresaTrue = () => {
    console.log('Regresa true');
    return true;
}
const  regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);

// Negación, transformar un valor booleano en su opuesto
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse()); // true

console.warn('And'); // true si todos los valores son VERDADEROS
//La condición con && ('And') para que sea true es que todas las condiciones regresen 'true'
console.log(true && true); //true;
console.log(true && false); //false
console.log(true && !false); //true

console.log('=================');
console.log(regresaFalse() && regresaTrue()); //false
// Solo imprime la primera función, JS ve que si la primera es 'false' el resultado ya es falso y ya no pasa por la segunda función porque no es necesario, no la ejecuta.
console.log(regresaTrue() && regresaFalse());
// Aquí imprime la primera función porque es 'true', por lo que sigue por la segunda e imprime su resultado

console.log('==== && ====')
regresaFalse() && regresaTrue();

console.log('4 Condiciones ', true && true && true && false)

// OR (O)
// || --> tubería o pipe
console.warn('OR'); // true
// Basta con que una condición sea 'true' para que el resultado sea 'true'
console.log(true || false); //true
console.log(false || false); //false

console.log(regresaTrue() || regresaFalse());
// JS evalúa la primera condición y como es 'true', ya no le importa lo demás porque el resultado ya es 'true' bastando con una, por eso no ejecuta la segunda función, es decir lo contrario de 'AND'
console.log(regresaFalse() || regresaTrue());
// Aquí si pasa por la segunda condición porque si el primero es falso, sigue evaluando lo demás por si encuentra un 'true'

console.log('4 Condiciones ', true || true || true || false) //true
