const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.
const inventory = {
    "Bubblegum": 202,
    "Toffee": 118,
    "Ice cream": 2250,
    "Milk chocolate": 1680,
    "Doughnut": 1075,
    "Pancake": 80,
}

function printInventory() {
    console.log("Earned amount:")
    for(const [item, price] of Object.entries(inventory)){
        console.log(`${item}: $${price}`);
    }
    console.log(`Income: $${getTotal()}`);
}

function getTotal() {
    let sum = 0;
    for(const price of Object.values(inventory)) {
        sum += price;
    }
    return sum;
}
printInventory();