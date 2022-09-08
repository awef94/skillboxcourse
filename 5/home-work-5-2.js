function calcTotal(sum, quantity, promo = null) {

    if(sum > 50000){
        let sale = Math.abs(50000 - sum);
        let promoSale = sale*0.2
        sum = 50000+promoSale;
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


