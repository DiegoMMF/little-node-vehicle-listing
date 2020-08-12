const convertirPrecio = require("../helpers/convertirPrecio");

const reducerToMin = (max, current) => {
    return Math.min(max, current);
};

const renderCheapest = (matchingArray) => {
    if (matchingArray.length === 1) {
        console.log(`\nVehículo más barato: ${matchingArray[0].marca} ${matchingArray[0].modelo}`);
    } else {
        console.log("\nHubo más de un vehículo con el mayor precio.");
        console.log("Los vehículos más baratos son los siguientes:");
        matchingArray.forEach(element => {
            console.log(element.marca, element.modelo);
        });
    }
}

const cheapest = (vehiclesArray) => {

    const menorPrecioInNumber = vehiclesArray
        .map(currentItem => convertirPrecio(currentItem.precio))
        .reduce(reducerToMin, Infinity);

    const matchingArray = vehiclesArray.filter(vehicle => convertirPrecio(vehicle.precio) === menorPrecioInNumber);

    renderCheapest(matchingArray);
}

module.exports = cheapest;