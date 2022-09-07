let first = 69;
let second = 1337;
let count = 2000;

while(count>0){
    --count
    console.log(Math.round(Math.random() * Math.abs(first - second)) + Math.min(first, second));
}