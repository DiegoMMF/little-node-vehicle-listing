const convertirPrecio = (stringValue) => {
    const invertedPunctuation = stringValue
        .replace(".", "")
        .replace(",", ".");
    const numberValue = parseFloat(invertedPunctuation, 10);
    return numberValue;
};

module.exports = convertirPrecio;