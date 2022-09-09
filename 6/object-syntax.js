let mark = `toyota`;
let model = `camry`;
let typeEngine = `v6`;
let octane = `95`;
let drive = `4wd`;
let seats = {front: `2`, back: `2`};
let body = `sedan`;

let automobile = {
    mark: mark,
    model: model,
    typeEngine: typeEngine,
    octane: octane,
    drive: drive,
    seats: seats,
    body: body,
};

automobile.damage = `damaged`;

console.log(automobile);

delete automobile.damage;

console.log(automobile);