const { dummyList } = require("./dummyList")

const reducer = (max, current) => {
    console.log("Math.max(max, current): ", Math.max(max, current));
    return Math.max(max, current);
};

const mayorPrecio = dummyList
                    .map(currentItem => {
                        // console.log("Number(currentItem.precio): ", Number(currentItem.precio));
                        // console.log("currentItem.precio: ", currentItem.precio);
                        // console.log(currentItem.precio.replace(".", "").replace(",", "."));
                        let comasPorPuntos = currentItem.precio.replace(".", "").replace(",", ".")
                        // console.log("parseInt(currentItem.precio, 10): ", parseFloat(comasPorPuntos, 10));
                        return parseFloat(comasPorPuntos, 10);
                    })
                    .reduce(reducer, -Infinity);

console.log(mayorPrecio);