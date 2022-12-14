function calcTotal(sum, quantity, promo = null) {

    if(sum > 50000){
        let dif = Math.abs(50000 - sum)*0.2;
        sum = sum-dif;
    }

    if(promo == `sale15`){
        if(sum >= 20000){
            sum = sum - (sum * 0.15);
        }
    }

    if(quantity >= 10){
        sum = sum - (sum * 0.05);
    }

    if(promo == `gift300`){
        if(sum<300){
            sum=0;
        }
        else{
            sum-=300;
        }
    }
    return sum;
}

console.log(calcTotal(60000,11, `sale15`));
console.log(calcTotal(10000, 11, `gift300`));
console.log(calcTotal(100, 15));
console.log(calcTotal(1000, 11, `gift300`));
console.log(calcTotal(150,5,`gift300`));
console.log(calcTotal(350,2,`gift300`));
console.log(calcTotal(21000, 9, `sale15`));
console.log(calcTotal(70000, 9));
console.log(calcTotal(55000, 9));
console.log(calcTotal(80000, 9));
console.log(calcTotal(90000, 9));
console.log(calcTotal(99999, 9));

