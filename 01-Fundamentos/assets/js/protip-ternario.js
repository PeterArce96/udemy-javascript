
const elMayor = (a, b) => (a > b) ? a : b;
// en la línea 2 se coloca el paréntesis para diferencia q esa es la condición, si a es mayor a b, entonces

// miembro, es una variable booleana
const tieneMembresia = (miembro) => (miembro) ? '2 dólares' : '10 dólares';

console.log(elMayor(20,15));
console.log(tieneMembresia(true));

// -----------------
const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(10,15)
]

console.log(amigosArr);

//-----------------
// Más de 1 condición
const nota = 65; //A+ A B+ B, etc
const grado =   nota >= 95 ? 'A+' :
                nota >= 90 ? 'A' :
                nota >= 85 ? 'B+':
                nota >= 80 ? 'B' :
                nota >= 75 ? 'C+' :
                nota >= 70 ? 'C' : 'F';

console.log({nota, grado});