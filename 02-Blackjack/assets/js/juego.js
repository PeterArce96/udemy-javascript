/*
    2C = Two of Clubs (Tréboles)
    2D = Two of Diamonds (Diamantes)
    2H = Two of Hearts (Corazones)
    2S = Two of Spades (Espadas)

*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

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

    console.log(deck);

    // Ordenar la baraja de forma aleatoria, con el método shuffle de Undercore.js
    deck = _.shuffle(deck);

    console.log(deck)

    return deck;
}

crearDeck();