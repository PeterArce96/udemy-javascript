/*
    2C = Two of Clubs (Tréboles)
    2D = Two of Diamonds (Diamantes)
    2H = Two of Hearts (Corazones)
    2S = Two of Spades (Espadas)

*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

// Función que crea una nueva baraja
const crearDeck = () => {

    for ( let i = 2; i <= 10; i++){
        for (let tipo of tipos) {
            deck.push(i + tipo); 
        }
        
    }

    for (let esp of especiales) {
        for (const tipo of tipos) {
            deck.push(esp + tipo)
        }
    }

    // console.log(deck);

    // Ordenar la baraja de forma aleatoria, con el método shuffle de Undercore.js
    deck = _.shuffle(deck);

    console.log(deck)

    return deck;
}

crearDeck();

// Función que permite tomar una carta
const pedirCarta = () => {

    if (deck.length === 0){
        throw 'No hay cartas en el deck';
    }

    // remueve el último elemento del arreglo y lo regresa
    const carta = deck.pop(); 

    console.log(deck)
    console.log(carta)
    return ;
}

// deck = []; // para que lea el mensaje (throw) cuando ya no haya cartas

pedirCarta();