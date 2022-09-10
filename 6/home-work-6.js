let objects = [
    {name: `Sasha`, surname: `Schepetkov`},
    {name: `Alex`, surname: `Ruban`},
    {name: `Masha`, surname: `Pashovkina`},
    {name: `Vova`, surname: `Savin`},
    {name: `Il'ya`, surname: `Bogatyr`},
];

function filter(obj, key, value) {
    for(let count = obj.length-1; count>=0; --count){
      let oneObj = obj[count];
        if (oneObj[key] == value){
            return oneObj;
        }
    };
};
console.log(filter(objects, `name`, `Alex`));
console.log(filter(objects, `name`, `Sasha`));
console.log(filter(objects, `name`, `Masha`));
console.log(filter(objects, `name`, `Vova`));
console.log(filter(objects, `name`, `Il'ya`));
//filter(objects, `name`, `Alex`);