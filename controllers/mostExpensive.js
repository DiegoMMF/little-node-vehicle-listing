const comasPorPuntos = (priceInString) => {
    const invertedPunctuation = priceInString
        .replace(".", "")
        .replace(",", ".");
    const priceInNumber = parseFloat(invertedPunctuation, 10);
    return priceInNumber;
};

const reducerToMax = (max, current) => {
    return Math.max(max, current);
};

const renderMostExpensive = (matchingArray) => {
    if (matchingArray.length === 1) {
        console.log(`Vehículo más caro: ${matchingArray[0].marca} ${matchingArray[0].modelo}`);
    } else {
        console.log("Hubo más de un vehículo con el mayor precio.");
        console.log("Los vehículos más caros son los siguientes:");
        matchingArray.forEach(element => {
            console.log(element.marca, element.modelo);
        });
    }
}

const mostExpensive = (vehiclesArray) => {

    const mayorPrecioInNumber = vehiclesArray
        .map(currentItem => comasPorPuntos(currentItem.precio))
        .reduce(reducerToMax, -Infinity);

    const matchingArray = vehiclesArray.filter(vehicle => comasPorPuntos(vehicle.precio) === mayorPrecioInNumber);

    renderMostExpensive(matchingArray);
}

module.exports = mostExpensive;