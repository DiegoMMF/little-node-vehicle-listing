/**
 * sólo filtramos los vehículos cuyos modelos tienen la letra Y
 * @param { Array<Object> } vehiclesArray 
 */
const includesY = (vehiclesArray) => {
    const letra = 'Y';
    const matchingArray = vehiclesArray
        .filter(vehicle => vehicle.modelo.includes(letra));
    return matchingArray;
}

/**
 * Aquí nos encargamos de pintar en pantalla lo que corresponda.
 * @param { Array<Object> } matchingArray 
 */
const renderIncludeLetter = (matchingArray) => {
    if (matchingArray.length === 1) {
        console.log(`\nVehículo que contiene en el modelo la letra 'Y': ${matchingArray[0].marca} ${matchingArray[0].modelo} $${matchingArray[0].precio}`);
    } else {
        console.log("\nHubo más de un vehículo que contiene en el modelo la letra 'Y'.");
        console.log("Son los siguientes:");
        matchingArray
            .forEach(element => {
                console.log(`${element.marca} ${element.modelo} $${element.precio}`);
            });
    }
}

/**
 * función principal que exportamos que recurre a las dos anteriores
 * @param { Array<Object> } vehiclesArray 
 */
const includesLetter = (vehiclesArray) => {

    const vehiclesIncluidingY = includesY(vehiclesArray);

    renderIncludeLetter(vehiclesIncluidingY);
}

module.exports = includesLetter;