/**
 * @fileoverview here we receive a vehicles array and return the cheaper of them in the console
 */

 const convertirPrecio = require("../helpers/convertirPrecio");


/**
 * extracts the lower out of two numbers
 * @param { Number } min 
 * @param { Number } current 
 */
const reducerToMin = (min, current) => {
    return Math.min(min, current);
};

/**
 * here we render in console the vehicle(s) with the lowast price
 * @param { Array<Object> } matchingArray array containing vehicles objects
 */
const renderCheapest = (matchingArray) => {
    if (matchingArray.length === 1) {
        console.log(`\nVehículo más barato: ${matchingArray[0].marca} ${matchingArray[0].modelo}`);
    } else {
        console.log("\nHubo más de un vehículo con el menor precio.");
        console.log("Los vehículos más baratos son los siguientes:");
        matchingArray.forEach(element => {
            console.log(element.marca, element.modelo);
        });
    }
}

/**
 * the wrapper for the above functions and the one we call in index.js
 * @param { Array<Objetc> } vehiclesArray original array
 */
const cheapest = (vehiclesArray) => {

    const menorPrecioInNumber = vehiclesArray
        .map(currentItem => convertirPrecio(currentItem.precio))
        .reduce(reducerToMin, Infinity);

    const matchingArray = vehiclesArray.filter(vehicle => convertirPrecio(vehicle.precio) === menorPrecioInNumber);

    renderCheapest(matchingArray);
}

module.exports = cheapest;