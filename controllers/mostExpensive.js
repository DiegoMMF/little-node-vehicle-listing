const convertirPrecio = require("../helpers/convertirPrecio");

/**
 * Devuelve el mayor de dos números.
 * @param {*} max 
 * @param {*} current 
 */
const reducerToMax = (max, current) => {
    return Math.max(max, current);
};

/**
 * Contempla la posibilidad de que haya más de un auto con el mismo (mayor) precio
 * @param { Array<Object> } matchingArray 
 */
const renderMostExpensive = (matchingArray) => {
    if (matchingArray.length === 1) {
        console.log(`\nVehículo más caro: ${matchingArray[0].marca} ${matchingArray[0].modelo}`);
    } else {
        console.log("\nHubo más de un vehículo con el mayor precio.");
        console.log("Los vehículos más caros son los siguientes:");
        matchingArray.forEach(element => {
            console.log(element.marca, element.modelo);
        });
    }
}

/**
 * función principal que recurre a las dos anteriores y que es llamada en index.js
 * @param { Array<Object> } vehiclesArray 
 */
const mostExpensive = (vehiclesArray) => {

    const mayorPrecioInNumber = vehiclesArray
        .map(currentItem => convertirPrecio(currentItem.precio))
        .reduce(reducerToMax, -Infinity);

    const matchingArray = vehiclesArray.filter(vehicle => convertirPrecio(vehicle.precio) === mayorPrecioInNumber);

    renderMostExpensive(matchingArray);
}

module.exports = mostExpensive;