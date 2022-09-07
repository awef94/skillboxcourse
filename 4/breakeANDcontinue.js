let deckCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
for(;;){
    let hand = [];
    while(hand.length<3){
        let card = Math.round(Math.random() * 12);
        hand.push(deckCards[card]);
    }
    let check = 0;
    if(hand.length == 3){
        if(hand.includes("2")){
            check+=2;
        }
        if(hand.includes("3")){
            check+=3
        }
        if(hand.includes("4")){
            check+=4
        }
        if(hand.includes("5")){
            check+=5
        }
        if(hand.includes("6")){
            check+=6
        }
        if(hand.includes("7")){
            check+=7
        }
        if(hand.includes("8")){
            check+=8
        }
        if(hand.includes("9")){
            check+=9
        }
        if(hand.includes("10")){
            check+=10
        }
        if(hand.includes("j")){
            check+=10;
        }
        if(hand.includes("q")){
            check+=10;
        }
        if(hand.includes("k")){
            check+=10;
        }
        if(hand.includes("a")){
            check+=11;
        }
        if(check > 21){
            console.log("You lose!")
            continue;
        } else if(check < 21){
            console.log("meh, repeat!");
            continue;
        } else if(check == 21){
            console.log("YOU WIN!!!");
            break;
        }

    }
}
