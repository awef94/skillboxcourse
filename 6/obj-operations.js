let motherboard = {
    price: 200,
    factor: `ATX`,
    socket: `lga1151`,
    chipset: `Z370`,
}
let cpu = {
    price: 200,
    typeCPU: `core i7-8700k`,
    nameCPU: `Coffee Lake-S`,
    clockCPU: `4400 MHz`,
    cacheCPU: `12MB`,
}
let memory = {
    price: 100,
    typeDDR: `DDR4`,
    totalMemory: `32768MB`,
    clockRAM: `1333MHz`,
}
let gpu = {
    price: 450,
    nameAdapter: `geForce GTX 1070`,
    nameMark: `gigabyte`,
    memoryGPU: `8GB`,
    gpuClock: `974`,
}

let computer = {
    ...motherboard,
    ...cpu,
    ...memory,
    ...gpu,
    price: motherboard.price + cpu.price + memory.price + gpu.price,
};

console.log(computer);

let computerAssign = Object.assign(
    motherboard, cpu, memory, gpu,
    {
        price: motherboard.price + cpu.price + memory.price + gpu.price,
    }
);

console.log(computerAssign);

console.log(Object.keys(computer));
console.log(Object.values(computer));
console.log(Object.entries(computer));