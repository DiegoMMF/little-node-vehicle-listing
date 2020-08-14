const convertirPrecio = require("../helpers/convertirPrecio");
const reducerToMax = (max, current) => { return Math.max(max, current); };

const sortByCost = (vehiclesArray) => {
    // creamos dos variables, una para los autos más caros (con igual precio) y la otra para los restantes
    let arregloAReducir = vehiclesArray;

    // bucle donde extraemos el arreglo de los autos más caros
    for (let i = 0; i < arregloAReducir.length; i++) {
        // console.log("vehiclesArray.length: ", vehiclesArray.length);
        // console.log("i: ", i);

        // buscamos el mayor precio
        let mayorPrecioInNumber = arregloAReducir
            .map(currentItem => convertirPrecio(currentItem.precio))
            .reduce(reducerToMax, -Infinity);

        if (convertirPrecio(arregloAReducir[i].precio) === mayorPrecioInNumber) {

            renderThisArray = arregloAReducir.splice(i, 1);
            console.log(`${renderThisArray[0].marca} ${renderThisArray[0].modelo}`);
            // console.log("renderThis:", renderThisArray);
            sortByCost(arregloAReducir)

        }
    }
}

const sortByCostWrapper = (vehiclesArray) => {

    // pintamos el texto genérico previo a los datos
    if (vehiclesArray.length === 0) {
        console.log("\nLa lista de vehículos está vacía.");
    } else {
        console.log("\nVehículos ordenados por precio de mayor a menor:")
        sortByCost(vehiclesArray);
    }
}
module.exports = sortByCostWrapper;