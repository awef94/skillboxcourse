let computer = {
    factor: `ATX`,
    socket: `lga1151`,
    chipset: `Z370`,
    typeCPU: `core i7-8700k`,
    nameCPU: `Coffee Lake-S`,
    clockCPU: `4400 MHz`,
    cacheCPU: `12MB`,
    typeDDR: `DDR4`,
    totalMemory: `32768MB`,
    clockRAM: `1333MHz`,
    nameAdapter: `geForce GTX 1070`,
    nameMark: `gigabyte`,
    memoryGPU: `8GB`,
    gpuClock: `974`,
    price: 1000,
}
let values = Object.values(computer);
let keys = Object.keys(computer);
let entries = Object.entries(computer);

for(let value of values){
    console.log(value);
}
console.log(`---------------------------------------------------------`);
for(let key of keys){
    console.log(`${key}-:-${computer[key]}`);
}
console.log(`---------------------------------------------------------`);
for(let entry of entries){
    console.log(`${entry[0]}-:-${entry[1]}`);
}