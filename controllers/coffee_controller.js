const Coffee = require("../models/coffeeModel");

async function getCoffees() {
    const coffees = await Coffee.find();
    return coffees;
}

async function getCoffee(coffeeId) {
    const coffee = await Coffee.findById(coffeeId);
    return coffee;
}

async function createCoffee(coffee) {
    const newCoffee = await Coffee.create(coffee);
    return newCoffee;
}

async function updateCoffee(coffeeId, coffee) {
    const updatedCoffee = await Coffee.findByIdAndUpdate(coffeeId, coffee, {
        new: true,
    });
    return updatedCoffee;
}
async function deleteCoffee(coffeeId) {
    const deletedCoffee = await Coffee.findByIdAndDelete(coffeeId);
    return deletedCoffee;
}
module.exports = {
    getCoffees,
    getCoffee,
    createCoffee,
    updateCoffee,
    deleteCoffee,
};
