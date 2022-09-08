//let now = new Date().getDay();

function whatIsDay() {
    let days = [
        `Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`
    ]

    console.log(`To day is ${days[new Date().getDay()]}`);
}

whatIsDay();