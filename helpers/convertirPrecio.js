/**
 * @param { String } stringValue recibimos el precio en string y lo convertimos a número
 * respetando decimales y todo.
 */
const convertirPrecio = (stringValue) => {
    const invertedPunctuation = stringValue
        .replace(".", "")
        .replace(",", ".");
    const numberValue = parseFloat(invertedPunctuation, 10);
    return numberValue;
};

module.exports = convertirPrecio;