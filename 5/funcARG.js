function whoIsWho(who) {
    console.log(`${who} is ${who}`);
}

whoIsWho(`Alex`);
whoIsWho(`Peter`);
whoIsWho(`Doctor Who`);

//---------------------------------------------------

function anyBodyWho(pers = `Retard`) {
    console.log(`${pers} is ${pers}`);
}

anyBodyWho();
anyBodyWho(`Jamboo`);

//-----------------------------------------------------------
let deck = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];

function focus(cardDeck, wantedCard = `a`) {
    console.log(`lets go!`);
    let check = false;
    for(let card of cardDeck){
        console.log(`We take this card: ${card}`)
        if(card == wantedCard){
            check = true;
            break;
        }
    }
    console.log(check ? `Ok! Find!` : `Not ok! Not find!`);
}

focus(deck, `k`);
focus(deck);