let handFibonacci = [];

handFibonacci.push(1);
handFibonacci.push(1);
handFibonacci.push(2);
handFibonacci.push(3);
handFibonacci.push(5);
handFibonacci.push(8);
handFibonacci.push(13);

let autoFibonacci =[1, 1];
console.log(autoFibonacci);

for(let i = 1; i<49; ++i){
    autoFibonacci.push(autoFibonacci[i] + autoFibonacci[i-1]);
    console.log("----------" + i + "-------------------");
    console.log(autoFibonacci);
    console.log("----------" + i + "-------------------");
}