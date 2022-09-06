let masters = ["Billie", "Van", "Mark", "Danny", "Steve", "Brad", "Rey", "Ricardo"];

console.log("My Icons:")

    for (let icon of masters){
    console.log(icon);
}

console.log("My rating of masters:");

    for (let i in masters){
        console.log(parseInt(i) + 1 + " pos: " + masters[i]);
    }