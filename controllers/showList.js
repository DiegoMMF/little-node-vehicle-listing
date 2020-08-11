const { dummyList } = require("./dummyList");

for (item in dummyList) {
    if (dummyList[item].tipo === "auto") {
        console.log(`Marca: ${dummyList[item].marca} // Modelo: ${dummyList[item].modelo} // Puertas: ${dummyList[item].puertas} // Precio: ${dummyList[item].precio}`);
    } else {
        console.log(`Marca: ${dummyList[item].marca} // Modelo: ${dummyList[item].modelo} // Cilindrada: ${dummyList[item].cilindrada} // Precio: ${dummyList[item].precio}`);
    }
}