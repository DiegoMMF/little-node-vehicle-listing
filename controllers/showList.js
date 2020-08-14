 /**
  * simple renderizador del arreglo de vehículos,
  * pero que distingue entre motos y autos
  * @param { Array<Object> } vehiclesArray 
  */
const showList = (vehiclesArray) => {
    for (item in vehiclesArray) {
        if (vehiclesArray[item].tipo === "auto") {
            console.log(`Marca: ${vehiclesArray[item].marca} // Modelo: ${vehiclesArray[item].modelo} // Puertas: ${vehiclesArray[item].puertas} // Precio: $${vehiclesArray[item].precio}`);
        } else {
            console.log(`Marca: ${vehiclesArray[item].marca} // Modelo: ${vehiclesArray[item].modelo} // Cilindrada: ${vehiclesArray[item].cilindrada} // Precio: $${vehiclesArray[item].precio}`);
        }
    }
}

module.exports = showList;