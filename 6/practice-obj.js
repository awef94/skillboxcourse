function print(obj, prop) {
    console.log(obj[prop]);
}

let automobile = {
    mark: `toyota`,
    model: `camry`,
    typeEngine: `v6`,
    octane: `95`,
    drive: `4wd`,
    seats: {front: `2`, back: `2`},
    body: `sedan`,
    dateProd: {year: 2018, month: 2, day: 23},

    getAge() {
        let now = new Date();
        let prod = new Date(
            this.dateProd.year,
            this.dateProd.month-1,
            this.dateProd.day+1,
        );
        console.log(now);
        console.log(prod);
        let timeMilliSeconds = now.getTime() - prod.getTime();
        return Math.floor(timeMilliSeconds/1000/60/60/24/365.25);
    }
};

print(automobile, `mark`);
console.log(automobile.getAge());