
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


// ASIGNACIONES CON OPERADORES
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
console.log({a1, }) // js asigna a la variable el último valor, pero si colocamos de primer valor 'false', no va evaluar nada porque no va seguir ejecutando lo demás y el resultado sería 'false'

// const a2 = 'Hola' && 'Mundo';
// console.log({a1, a2,  }) //Mundo

const a2 = 'Hola' && 'Mundo' && soyFalso;
console.log({a1, a2,  }) //false, porque con && todos tienen que ser verdadero para que sea 'true'

const a3 = soyFalso || 'Ya no soy falso';
console.log({a1, a2, a3, }); //Ya no soy falso, porque el primer valor es falso, por lo que sigue evaluando las demás condiciones.

const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
console.log({a1, a2, a3, a4, }); //Ya no soy falso de nuevo, porque el primero valor es 'false' por lo que sigue evaluando, el segundo y tercero son valores, por lo que sigue evaluando, el cuarto valor es 'true' lo demás ya no se ejecuta,

const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({a1, a2, a3, a4, a5, }); //true, porque la función regresaTrue() es 'true' por lo que no sigue ejecutando lo demás

if(regresaFalse() && regresaTrue && (true || false || true)) {
    console.log('Hacer algo');
}else {
    console.log('Hacer otra cosa');
}
// NO deberíamos tener más de 3 condiciones, si tenemos más tendríamos que simplificarlo