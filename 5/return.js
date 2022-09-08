let deck = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];

function focus(cardDeck, wantedCard) {
    console.log(`lets go!`);
    let check = false;
    for(let card of cardDeck){
        console.log(`We take this card: ${card}`)
        if(card == wantedCard){
            check = true;
            break;
        }
    }
    console.log(check ? `Ok! Find! You card ${wantedCard}` : `Not ok! Not find! You card ${wantedCard}`);
}

function spelledCard() {
    let deck = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
    return deck[Math.round(Math.random()*12)];
}
function spelledDeck() {
    let deck = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
    let spelledDeck = [];
    for(let quantity = 5; quantity>0; quantity--){
        spelledDeck.push(deck[Math.round(Math.random()*12)]);
    }
    return spelledDeck;
}

focus(spelledDeck(), spelledCard());
