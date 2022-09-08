let n = 69;
let m = 666;
let array = [];

for(let count = Math.round(Math.random()*(Math.abs(n-m))+Math.min(m,n)); count > 0; --count){

    array.unshift(Math.round(Math.random()*(Math.abs(n-m))+Math.min(m,n)));

}
console.log(array);

//---------------------------------------------------------------

let strng = "Your mom love my gun!";
let rvrsStrng = "";

for(let length = strng.length; length >= 0; --length){
    rvrsStrng+=strng.charAt(length);
}
console.log(rvrsStrng);

//----------------------------------------------------------------------

let tank = 5;
let road =[];
for(let pos = Math.round(Math.random()*42); pos > 0; --pos){
    let mine = Math.round(Math.random()*2);
    if(mine == 1){
        road.push(true);
    }else(road.push(false));
}
console.log(road);

let roadPOS = 0;

for(let turn of road){
    console.log(`Tank move to ${++roadPOS}`);
    if(turn == true){
        --tank;
        if (tank>1){
            console.log(`Damaged! Lives: ${tank}`);
            continue;
        }
        else{
            --tank;
            console.log(`KIA! Lives: ${tank}`);
            break;
        }
    }
    else{
        console.log("Tank must go on!");
    }
}